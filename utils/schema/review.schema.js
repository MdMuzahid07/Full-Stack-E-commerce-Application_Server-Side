const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "user name must be added"]
    },
    userTitle: {
        type: String,
        required: [true, "user name must be added"]
    },
    userAvatar: {
        type: String,
        required: [true, "user avatar must be added"]
    },
    userEmail: {
        type: String,
        required: [true, "user email must be added"]
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