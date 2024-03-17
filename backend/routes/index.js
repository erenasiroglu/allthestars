const express = require("express");
const router = express.Router();

// import all routes

const productRouter = require("./products.js");
const categoryRouter = require("./categories.js");

router.use("/products", productRouter);
router.use("/categories", categoryRouter);

module.exports = router;