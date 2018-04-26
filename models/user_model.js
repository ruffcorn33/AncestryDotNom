const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
