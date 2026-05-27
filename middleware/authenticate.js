const authenticate = (req, res, next) => {

    console.log("AUTH MIDDLEWARE RUNNING");
    console.log("Session user:", req.session.user);

    if (req.session.user) {
        return next();
    }

    return res.status(401).json({
        message: "You do not have access"
    });
};

module.exports = authenticate;