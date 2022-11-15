const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const databaseConnection = require('./utils/databaseConnection');
const productsRouter = require('./routes/productRoute_V1/products.route');
const port = process.env.PORT || 5000;



// middleware's
app.use(cors());
app.use(express.json());

// database connection
databaseConnection();

app.use("/api/v1/products", productsRouter);

app.get("/", (req, res, next) => {
    res.send("server running?");
});

app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});