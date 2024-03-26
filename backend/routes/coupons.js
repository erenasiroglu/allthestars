const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon");

// create new Coupon
router.post("/", async (req, res) => {
  try {
    const { code, discountPercent } = req.body;
    const newCoupon = new Coupon({
      code,
      discountPercent,
    });

    await newCoupon.save();

    res.status(201).json(newCoupon);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
