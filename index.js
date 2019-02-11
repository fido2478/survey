const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
// we don't need const passportConfig because of no return
// order in the following sequence is important. passport uses User
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

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


const PORT = process.env.PORT || 5000;
app.listen(PORT);
