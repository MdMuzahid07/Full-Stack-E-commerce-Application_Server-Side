const mongoose = require('mongoose');


// schema design

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: [true, "please provide a product name"],
        trim: true,
        unique: [true, "name must be unique"],
        minLength: [5, "name must be at least 5 character"],
        maxLength: [100, "name must be in 100 character"]
    },
    shop: {
        type: Boolean,
        required: [true, "please make shop true"],
    },
    brand: {
        type: String,
        required: [true, "please provide a brand name"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "please provide price for this product"],
    },
    minimumOrder: {
        type: Number,
        required: [true, "please add minimum order"],
    },
    description: {
        type: String,
        require: [true, "please add a description for this product"]
    },
    snapshot0: {
        type: String,
        required: [true, "please add a product snapshot"]
    },
    snapshot1: {
        type: String,
        required: [true, "please add a product snapshot"]
    },
    snapshot2: {
        type: String,
        required: [true, "please add a product snapshot"]
    },
    image: {
        type: String,
        required: [true, "please add a product image"]
    },
    status: {
        type: String,
        required: [true, "please add a status"]
    },
    categories: {
        type: String,
        required: true,
    },
    availableQuantity: {
        type: Number,
        required: [true, "please add a available quantity"]
    }
},
    {
        timestamps: true
    }
);

module.exports = productSchema;