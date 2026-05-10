const connectDB = require("./db");

async function run() {
    const db = await connectDB();

    const users = db.collection("users");

    const result = await users.insertOne({
        name: "Josue",
        age: 22
    });

    console.log("Inserted:", result);
}

run();