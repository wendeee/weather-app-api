const express = require('express');
const cors = require('cors')
const router = require('./routes')
const globalErrorHandler = require('./utils/globalErrorHandler')
const app = express();
require("dotenv").config();
const API_KEY = process.env.API_KEY
//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/", express.static("src/client/public"))

//api endpoint
app.use("/api/v1/city", router)

//catch error for unregistered endpoint
app.all("*", (req, res, next) => {
    const err = new Error(`${req.originalUrl} not found!`);
    err.status = "fail"
    err.StatusCode = 404;
    next(err);
  });

app.use(globalErrorHandler)


module.exports = app;