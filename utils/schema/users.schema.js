const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);

module.exports = userSchema;