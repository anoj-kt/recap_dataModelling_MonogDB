const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  age: {
    type: Number,
    min: [18, 'You need to be older than 18'],
  },
  roles: {
    type: String,
    enum: {
      values: ['buyer', 'seller'],
      message: '{VALUE} not supported',
    },
  },
  hobbies: [String],
  isAdmin: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  address: {
    houseNumber: Number,
    street: String,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
