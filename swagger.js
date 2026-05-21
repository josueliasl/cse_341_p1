const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "Contacts API",
        description: "Contacts API documentation"
    },

    host: "localhost:3000",
    schemes: ["http"]
};

const outputFile = "./swagger.json";

const routes = ["./server.js"];

swaggerAutogen(outputFile, routes, doc);