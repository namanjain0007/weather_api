const express = require("express");
const router = express.Router();

const { fetchWeatherData } = require("../contollers/auth_controller");

router.route("/weather/:city").get(fetchWeatherData);
module.exports = router;
