const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
// we don't need const passportConfig because of no return
// order in the following sequence is important. passport uses User
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
