const express = require("express");
const router = express.Router();

// get all products

router.get("/", async (req, res) => {
  res.send("Get products");
});

module.exports = router;
