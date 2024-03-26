const express = require("express");
const router = express.Router();

// import all routes

const productRouter = require("./products.js");
const categoryRouter = require("./categories.js");
const authRoute = require("./auth.js");
const couponsRoute = require("./coupons.js");

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/auth", authRoute);
router.use("/coupons", couponsRoute);

module.exports = router;
