const express = require('express')
const requestHandler = require("./controller")

const router = express.Router()

router.get("/:city", requestHandler.getCityData)
module.exports = router;