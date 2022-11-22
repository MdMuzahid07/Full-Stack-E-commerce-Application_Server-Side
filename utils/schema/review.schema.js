const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "user name must be added"]
    },
    userAvatar: {
        type: String,
        required: [true, "user avatar must be added"]
    },
    userReview: {
        type: String,
        required: [true, "review must be added"]
    }
},
    {
        timestamps: true
    }
);

module.exports = reviewSchema;