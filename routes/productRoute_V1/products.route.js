const express = require('express');
const { getAllProducts, uploadAProduct, updateAProduct, deleteAProduct, postAProduct, getProductById } = require('../../controllers/product_controllers/products.controllers');
const router = express.Router()


router.route("/")
    .get(getAllProducts)
    .post(postAProduct)

router.route("/:id")
    .get(getProductById)
    .patch(updateAProduct)
    .delete(deleteAProduct)

module.exports = router;