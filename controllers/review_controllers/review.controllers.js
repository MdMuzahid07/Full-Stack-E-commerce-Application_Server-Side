
module.exports.getAllReviews = async (req, res, next) => {
    try {
        const result = await setReviewModelName.find({});

        res.status(200).json({
            success: true,
            message: "data get successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "data not found",
            error: error.message
        })
    }
};


module.exports.postAReview = async (req, res, next) => {
    try {

        const product = new setReviewModelName(req.body);
        const result = await product.save();

        res.status(200).json({
            success: true,
            message: "data post successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "data not post",
            error: error.message
        })
    }
};


module.exports.deleteAReview = async (req, res, next) => {
    try {
        const { id } = req.params;
        const query = { _id: id };

        const result = await setReviewModelName.findOneAndDelete(query)


        res.status(200).json({
            success: true,
            message: "delete successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "data not delete",
            error: error.message
        })
    }
};