const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const databaseConnection = require('./utils/databaseConnection');
const productsRouter = require('./routes/productRoute_V1/products.route');
const userRouter = require('./routes/usersRoute_V1/users.route');
const port = process.env.PORT || 5000;



// middleware's
app.use(cors());
app.use(express.json());

// database connection
databaseConnection();

// product API
app.use("/api/v1/products", productsRouter);

// users API
app.use("/api/v1/users", userRouter);


app.get("/", (req, res, next) => {
    res.send("server running?");
});

app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});