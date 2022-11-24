const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    userName: {
        type: String,
    },
    userEmail: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);

module.exports = userSchema;