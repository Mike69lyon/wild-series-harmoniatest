const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/programActions");

router.use("/", browse)

module.exports = router;