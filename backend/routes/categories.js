const express = require("express");
const router = express.Router();
const categories = require("../models/Category");
const Category = require("../models/Category");

// create new category
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

// get all categories
router.get("/", async (req, res) => {
  try {
    const allCategories = await Category.find();
    res.status(200).json(allCategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get a specific category (Read - Single)
router.get("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    try {
      const category = await Category.findById(categoryId);

      res.status(200).json(category);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Category not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
