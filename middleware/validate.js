const { body, validationResult } = require("express-validator");

const validateUser = [
    body("firstName")
        .notEmpty()
        .withMessage("First name is required"),

    body("lastName")
        .notEmpty()
        .withMessage("Last name is required"),

    body("email")
        .isEmail()
        .withMessage("Valid email is required"),

    body("favoriteColor")
        .notEmpty()
        .withMessage("Favorite color is required"),

    body("birthday")
        .notEmpty()
        .withMessage("Birthday is required"),

    (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        next();
    }
];

const validateBook = [
    body("title")
        .notEmpty()
        .withMessage("Title is required"),

    body("author")
        .notEmpty()
        .withMessage("Author is required"),

    body("genre")
        .notEmpty()
        .withMessage("Genre is required"),

    body("publishedYear")
        .isNumeric()
        .withMessage("Published year must be a number"),

    (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        next();
    }
];

module.exports = {
    validateUser,
    validateBook
};