const express = require("express");
const router = express.Router();

const productsRoutes = require("./products.routes");
const userRoutes = require("./user.routes");

router.use("/products", productsRoutes);
router.use("/users", userRoutes);

module.exports = router;
