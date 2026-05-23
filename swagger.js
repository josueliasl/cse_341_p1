const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "Contacts API",
        description: "Contacts API documentation"
    },

    host: "project2crud.onrender.com",
    schemes: ["https"]
};

const outputFile = "./swagger.json";

const routes = ["./server.js"];

swaggerAutogen(outputFile, routes, doc);