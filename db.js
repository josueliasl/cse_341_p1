const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();

        console.log("Connected to MongoDB!");

        const db = client.db("myDatabase");

        return db;
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;