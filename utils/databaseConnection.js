const mongoose = require('mongoose');

async function databaseConnection() {
    await mongoose.connect("mongodb://localhost:27017").then(
        console.log(`MongoDB connected using mongoose`)
    );
};

module.exports = databaseConnection;