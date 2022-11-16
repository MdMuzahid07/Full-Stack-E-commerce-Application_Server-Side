const express = require("express");
const { getAllOrders, createAOrder, updateAOrder, deleteAOrder, getOrderById } = require("../../controllers/order_controllers/order.controllers");
const router = express.Router();

router.route("/")
    .get(getAllOrders)
    .post(createAOrder)


router.route("/:id")
    .get(getOrderById)
    .patch(updateAOrder)
    .delete(deleteAOrder)

module.exports = router;