require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


const connectDB = require("./db");

app.use(express.json());
app.use(cors());
app.use("/", require("./routes/swagger"));

// routes
//The server connects endpoints to separate route files.
app.use("/", require("./routes"));
app.use("/contacts", require("./routes/users"));

// connect DB BEFORE starting server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});