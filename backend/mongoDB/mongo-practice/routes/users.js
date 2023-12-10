const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testDB");

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  city: String
});

module.exports = mongoose.model('user',userSchema);