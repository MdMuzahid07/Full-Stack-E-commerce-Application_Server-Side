const ProductModel = require("../../models/product.model");

module.exports.getAllProducts = async (req, res, next) => {
    try {
        const result = await ProductModel.find({});


        res.status(200).json({
            success: true,
            message: "data get successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "data not find",
            error: error.message
        })
    }
};

module.exports.postAProduct = async (req, res, next) => {
    try {

        const product = new ProductModel(req.body);
        const result = await product.save();

        res.status(200).json({
            success: true,
            message: "data get successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "data not find",
            error: error.message
        })
    }
};

module.exports.updateAProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const filter = { _id: id };

        const result = await ProductModel.findOneAndUpdate(filter, data);


        res.status(200).json({
            success: true,
            message: "data get successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "data not find",
            error: error.message
        })
    }
};

module.exports.deleteAProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const query = { _id: id };

        const result = await ProductModel.findOneAndDelete(query)


        res.status(200).json({
            success: true,
            message: "data get successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "data not find",
            error: error.message
        })
    }
};