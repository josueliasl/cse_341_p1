const Book = require("../models/Book");

// GET all books
const getAll = async (req, res) => {
    try {

        const books = await Book.find();

        res.status(200).json(books);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

// GET single book
const getSingle = async (req, res) => {
    try {

        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json(book);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

// CREATE book
const createBook = async (req, res) => {
    try {

        const book = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            publishedYear: req.body.publishedYear
        });

        res.status(201).json({
            message: "Book created successfully",
            id: book._id
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

// UPDATE book
const updateBook = async (req, res) => {
    try {

        const result = await Book.replaceOne(
            { _id: req.params.id },
            {
                title: req.body.title,
                author: req.body.author,
                genre: req.body.genre,
                publishedYear: req.body.publishedYear
            }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(204).send();

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

// DELETE book
const deleteBook = async (req, res) => {
    try {

        const result = await Book.deleteOne({
            _id: req.params.id
        });

        if (result.deletedCount === 0) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(204).send();

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getAll,
    getSingle,
    createBook,
    updateBook,
    deleteBook
};