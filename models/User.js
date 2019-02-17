const mongoose = require('mongoose');
const { Schema } = mongoose; //exactly same as const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  // result from Stripe transaction
  credits: { type: Number, default: 0 }
});

// name of a collection: users
mongoose.model('users', userSchema);
