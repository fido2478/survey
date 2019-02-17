const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser =  require('body-parser');
const keys = require('./config/keys');
// we don't need const passportConfig because of no return
// order in the following sequence is important. passport uses User
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

// important to put it on the top, 
// so it parses before passing to other middleware
app.use(bodyParser.json());

// give us access to cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //day x hours x min x sec x msec
    keys: [keys.cookieKey]
  })
);
// tell passort to make use of cookies
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
// make sure express works properly when it's deployed
if (process.env.NODE_ENV === 'production'){
  // Express will serve up production assets
  // like our main.js file or main.css file
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  // if all previous paths are not matched, then go to index.html
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};

const PORT = process.env.PORT || 5000;
app.listen(PORT);
