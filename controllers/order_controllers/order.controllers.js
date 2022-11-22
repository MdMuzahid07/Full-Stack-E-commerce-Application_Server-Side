const OrderModel = require("../../models/order.model");

module.exports.getAllOrders = async (req, res, next) => {
    try {
        const result = await OrderModel.find({});


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

module.exports.getOrderById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await OrderModel.findById(id);


        res.status(200).json({
            success: true,
            message: "Success",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "data not found",
            error: error.message
        })
    };
};

module.exports.createAOrder = async (req, res, next) => {
    try {

        const product = new OrderModel(req.body);
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

module.exports.updateAOrder = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const filter = { _id: id };

        const result = await OrderModel.findOneAndUpdate(filter, data);

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

module.exports.deleteAOrder = async (req, res, next) => {
    try {
        const { id } = req.params;
        const query = { _id: id };

        const result = await OrderModel.findOneAndDelete(query)


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