const express = require("express");
const router = express.Router();

const productsRoutes = require("./products.routes");
const usersRoutes = require("./user.routes");
const ordersRoutes = require("./orders.routes");

router.use("/products", productsRoutes);
router.use("/users", usersRoutes);
router.use("/orders", ordersRoutes);

module.exports = router;
