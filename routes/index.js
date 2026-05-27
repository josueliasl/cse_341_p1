const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get("/", (req, res) => {
    if (req.session.user) {
        res.send(`Logged in as ${req.session.user.displayName}`);
    } else {
        res.send("Logged Out");
    }
});

router.get(
    "/login",
    passport.authenticate("github")
);

router.get(
    "/github/callback",
    passport.authenticate("github", {
        failureRedirect: "/api-docs"
    }),
    (req, res) => {
        req.session.user = req.user;
        res.redirect("/");
    }
);

router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

module.exports = router;