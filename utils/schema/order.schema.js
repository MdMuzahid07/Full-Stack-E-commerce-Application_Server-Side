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
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: [true, "address must be added"]
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
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