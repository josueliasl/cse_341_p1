const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");
const validation = require("../middleware/validate");
const authenticate = require("../middleware/authenticate");

// GET all contacts
router.get("/", usersController.getAll);

// GET single contact
router.get("/:id", usersController.getSingle);

// POST create contact
router.post(
    "/",
    authenticate,
    validation.validateUser,
    usersController.createUser
);

// PUT update contact
router.put(
    "/:id",
    authenticate,
    validation.validateUser,
    usersController.updateUser
);

// DELETE contact
router.delete(
    "/:id",
    authenticate,
    usersController.deleteUser
);

module.exports = router;