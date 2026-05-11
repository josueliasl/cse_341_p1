require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const connectDB = require("./db");

app.use(express.json());

// routes
app.use("/", require("./routes"));
app.use("/users", require("./routes/users"));

// connect DB BEFORE starting server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});