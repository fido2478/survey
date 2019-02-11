const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
// define model class: User
const User = mongoose.model('users');

// generate the identifying piece of info: user.id
passport.serializeUser((user, done) => {
  // user.id is the id that mongo automatically generated associated with googleid
  done(null, user.id);
});

// take out the piece of info extracted from the cookie sent by the browser 
// and turn in back to the user
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // argument: error obj, user record
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save();
      // inform google it's done
      done(null, user);
    }
  )
);
