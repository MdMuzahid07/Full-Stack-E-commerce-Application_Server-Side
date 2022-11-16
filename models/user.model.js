const mongoose = require("mongoose");
const userSchema = require("../utils/schema/users.schema");

const userModel = mongoose.model("users", userSchema);


module.exports = userModel;