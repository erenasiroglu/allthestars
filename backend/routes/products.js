const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// get all products

router.get("/", async (req, res) => {
  res.send("Get products");
});

// create new product
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
