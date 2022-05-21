const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: "Username is required", unique: true },
  password: { type: String, required: false },
});

module.exports = mongoose.model("user", userSchema);
