const express = require("express");
const router = express.Router();

const booksController = require("../controllers/books");
const validation = require("../middleware/validate");
const authenticate = require("../middleware/authenticate");

// GET all books
router.get("/", booksController.getAll);

// GET single book
router.get("/:id", booksController.getSingle);

// POST create book
router.post(
    "/",
    authenticate,
    validation.validateBook,
    booksController.createBook
);

// PUT update book
router.put(
    "/:id",
    authenticate,
    validation.validateBook,
    booksController.updateBook
);

// DELETE book
router.delete(
    "/:id",
    authenticate,
    booksController.deleteBook
);

module.exports = router;