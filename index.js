require("dotenv").config();

const connectDB = require("./db");
const User = require("./models/User");

async function run() {
    await connectDB();

    const result = await User.create({
        name: "Josue",
        age: 22
    });

    console.log("Inserted:", result);
}

run();