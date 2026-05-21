const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Contacts API Working");
});

module.exports = router;