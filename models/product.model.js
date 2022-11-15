const mongoose = require('mongoose');
const productSchema = require('../utils/schema/product.schema');


const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;