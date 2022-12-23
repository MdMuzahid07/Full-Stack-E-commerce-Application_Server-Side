const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    productId: {
        type: String,
        required: [true, "please add product id"]
    },
    productQuantity: {
        type: Number,
        required: [true, "product quantity must be added"]
    },
    email: {
        type: String,
        required: [true, "customer email must be added"]
    },
    Name: {
        type: String,
        required: [true, "last name must be added"]
    },
    contact: {
        type: Number,
        required: [true, "contact number must be added"]
    },
    address: {
        type: String,
        required: [true, "address must be added"]
    },
    city: {
        type: String,
        required: [true, "city name must be added"]
    },
    state: {
        type: String,
        required: [true, "state must be added"]
    },
    country: {
        type: String,
        required: [true, "country must be added"]
    },
    zip: {
        type: Number
    }

},
    {
        timestamps: true
    }
);


module.exports = orderSchema;