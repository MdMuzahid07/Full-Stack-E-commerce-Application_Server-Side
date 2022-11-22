const express = require('express');
const { getAllReviews, postAReview, deleteAReview } = require('../../controllers/review_controllers/review.controllers');
const router = express.Router();

router.route("/")
    .get(getAllReviews)
    .post(postAReview)

router.route("/:id")
    .delete(deleteAReview)


module.exports = router;