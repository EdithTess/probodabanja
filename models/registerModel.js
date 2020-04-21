const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const registerSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  username: { type: String, required: "Enter username" },
  password: { type: String,required: "Enter password",},
  dob: Date,
  email: String,
  phonenumber: Number,
  spid: String,
  wdays: Number,
  current: Date,
  companyrole: String
});

//Password should be encrypted 10 times
registerSchema.pre("save", function (next) {
  this.password = bcryptjs.hashSync(this.password, 10);
  next();
});

//Get your username and password and check in the DB for that username
registerSchema.statics.authenticate = async function (username, password) {
  const user = await this.findOne({
    username: username,
  });
  if (!user) {
    throw new Error("User not found.");
  }
  const match = await bcryptjs.compare(password, user.password);
  if (match) {
    return user;
  }
};

module.exports = mongoose.model("User", registerSchema);
