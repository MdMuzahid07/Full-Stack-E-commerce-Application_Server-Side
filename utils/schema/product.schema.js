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
    brand: {
        type: String,
        required: [true, "please provide a brand name"],
        trim: true,
    },
    description: {
        type: String,
        require: [true, "please add a description for this product"]
    },
    price: {
        type: Number,
        required: [true, "please provide price for this product"],
    },
    productQuantity: {
        type: Number,
        required: [true, "please add a available quantity"]
    },
    minimumOrder: {
        type: Number,
        required: [true, "please add minimum order"],
    },
    category: {
        type: String,
        required: true,
    },
    feature1: {
        type: String,
        required: true
    },
    feature2: {
        type: String,
        required: true
    },
    feature3: {
        type: String,
        required: true
    },
    feature4: {
        type: String,
        required: true
    },
    feature5: {
        type: String,
        required: true
    },
    feature6: {
        type: String,
        required: true
    },
    feature7: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: [true, "please add a product image"]
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
    }
},
    {
        timestamps: true
    }
);

module.exports = productSchema;