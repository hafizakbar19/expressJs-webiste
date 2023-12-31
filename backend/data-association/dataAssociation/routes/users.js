const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/dataAssociationDB');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  dp: {
    type: String, // Assuming you store the path or URL of the display picture
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
