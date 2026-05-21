const express = require("express");
const router = express.Router();

const booksController = require("../controllers/books");
const validation = require("../middleware/validate");

/* 
    #swagger.tags = ['Books']
*/

// GET all books
router.get("/", booksController.getAll);

// GET single book
router.get("/:id", booksController.getSingle);

// POST create book
router.post(
    "/",
    validation.validateBook,
    booksController.createBook
);

// PUT update book
router.put(
    "/:id",
    validation.validateBook,
    booksController.updateBook
);

// DELETE book
router.delete("/:id", booksController.deleteBook);

module.exports = router;