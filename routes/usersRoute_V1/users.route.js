const express = require('express');
const { getAllUsers, createAUser, updateAUser, deleteAUser } = require('../../controllers/user_controllers/users.controller');
const router = express.Router();


router.route("/")
    .get(getAllUsers)
    .post(createAUser)


router.route("/:id")
    .patch(updateAUser)
    .delete(deleteAUser)


module.exports = router;