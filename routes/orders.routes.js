const express = require("express");
const router = express.Router();

const { save_order } = require("../controllers/orders.controller");
const { validate } = require("../validations/validation");
const { order_schema } = require("../validations/validationSchemas");

router.route("/save").post(validate(order_schema), save_order);

module.exports = router;
