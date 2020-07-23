const express = require("express");
const router = express.Router();

const { products_paginated } = require("../controllers/products.controller");

router.route("/").get(products_paginated);

module.exports = router;
