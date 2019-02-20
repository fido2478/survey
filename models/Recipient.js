const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

// instead of registering in MongoDB, export it
// so that it will be part of a document
module.exports = recipientSchema;
