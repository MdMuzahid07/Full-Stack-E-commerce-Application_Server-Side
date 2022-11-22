const express = require('express');
const router = express.Router();

router.route("/")
    .get()
    .post()
    .patch()
    .delete()

router.route("/:id")
    .get()
    .post()
    .patch()
    .delete()