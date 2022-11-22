const mongoose = require('mongoose');
const reviewSchema = require('../utils/schema/review.schema');

const ReviewModel = mongoose.model("reviews", reviewSchema);

module.exports = ReviewModel;