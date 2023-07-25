const mongoose = require('mongoose');

const user = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required.'],
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
  },
});

module.exports = mongoose.model('user', user);
