const mongoose = require('mongoose');
const orderSchema = require('../utils/schema/order.schema');


const OrderModel = mongoose.model("orders", orderSchema);

module.exports = OrderModel;