const UserModel = require("../../models/user.model");

module.exports.getAllUsers = async (req, res, next) => {
    try {
        const result = await UserModel.find({});


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


module.exports.createAUser = async (req, res, next) => {
    try {

        const user = new UserModel(req.body);
        const result = await user.save();

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


module.exports.updateAUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const filter = { _id: id };

        const result = await UserModel.findOneAndUpdate(filter, data);


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


module.exports.deleteAUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const query = { _id: id };

        const result = await UserModel.findOneAndDelete(query)


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