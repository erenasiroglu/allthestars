const express = require("express");
const router = express.Router();

// import all routes

const productRouter = require("./products.js");
const categoryRouter = require("./categories.js");
const authRoute = require("./auth.js");
const couponsRoute = require("./coupons.js");
const userRoute = require("./user.js");
const paymentRoute = require("./payment.js");

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/auth", authRoute);
router.use("/coupons", couponsRoute);
router.use("/users", userRoute);
router.use("/payment", paymentRoute);

module.exports = router;
