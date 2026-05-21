const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");
const validation = require("../middleware/validate");

/* 
    #swagger.tags = ['Contacts']
*/

// GET all contacts
router.get("/", usersController.getAll);

// GET single contact
router.get("/:id", usersController.getSingle);

// POST create contact
router.post(
    "/",
    validation.validateUser,
    usersController.createUser
);

// PUT update contact
router.put(
    "/:id",
    validation.validateUser,
    usersController.updateUser
);

// DELETE contact
router.delete("/:id", usersController.deleteUser);

module.exports = router;