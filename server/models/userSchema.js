const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Number: Number,
  Password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
