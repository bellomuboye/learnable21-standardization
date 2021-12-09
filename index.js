const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();
const port = process.env.PORT;

const routes = require("./src/routes/user")

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

app.get('/ping', (req, res) => {
    res.status(200).send(
        {status: "operational",
        message: "view documentation on https://github.com/bellomuboye/learnable21-standardization#readme"})
});

app.use("/api", routes)

app.listen(port, async() => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log(':::> Connected to MongoDB Database');
    } catch (error) {
        console.log("<::: Fail: Could not connect to database ", error);
    }

    console.log(`:::> Server listening on http://localhost:${port}`)
})