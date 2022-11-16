const mongoose = require("mongoose");
const userSchema = require("../utils/schema/users.schema");

const UserModel = mongoose.model("users", userSchema);


module.exports = UserModel;