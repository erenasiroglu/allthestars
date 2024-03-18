const express = require("express");
const router = express.Router();
const categories = require("../models/Category");
const Category = require("../models/Category");

router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;
    const newCategory = new Category({
      name,
      img,
    });

    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  res.send("Get categories");
});

module.exports = router;
