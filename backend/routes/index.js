const express = require("express");
const router = express.Router();

// import all routes

const productRouter = require("./products.js");
const categoryRouter = require("./categories.js");
const authRoute = require("./auth.js");

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/auth", authRoute);

module.exports = router;
