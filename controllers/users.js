const User = require("../models/User");

// GET all contacts
const getAll = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET single contact
const getSingle = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CREATE contact
const createUser = async (req, res) => {
    try {
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        });

        res.status(201).json({
            message: "Contact created successfully",
            id: user._id
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE contact
const updateUser = async (req, res) => {
    try {

        const result = await User.replaceOne(
            { _id: req.params.id },
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                favoriteColor: req.body.favoriteColor,
                birthday: req.body.birthday
            }
        );

        if (result.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Contact not found" });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE contact
const deleteUser = async (req, res) => {
    try {

        const result = await User.deleteOne({
            _id: req.params.id
        });

        if (result.deletedCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Contact not found" });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser
};

