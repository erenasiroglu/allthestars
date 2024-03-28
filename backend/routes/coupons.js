const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon");

// create new Coupon
router.post("/", async (req, res) => {
  try {
    const { code } = req.body;
    const existingCoupon = await Coupon.findOne({ code });
    if (existingCoupon) {
      return res.status(400).json({ error: "This coupon is already exist." });
    }
    const newCoupon = new Coupon(req.body);
    await newCoupon.save();
    res.status(201).json(newCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// get all coupons
router.get("/", async (req, res) => {
  try {
    const allCoupons = await Coupon.find();
    res.status(200).json(allCoupons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// get a specific coupon (Read - Single by Coupon ID)
router.get("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;

    try {
      const coupon = await Coupon.findById(couponId);
      res.status(200).json(coupon);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Coupon not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// get a specific coupon (Read - Single by Coupon Code)
router.get("/code/:couponCode", async (req, res) => {
  try {
    const couponCode = req.params.couponCode;
    try {
      const coupon = await Coupon.findOne({ code: couponCode });
      res.status(200).json(coupon);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Coupon not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

//update coupon
router.put("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const updates = req.body;
    const existingCoupon = await Coupon.findById(couponId);
    if (!existingCoupon) {
      return res.status(404).json({ error: "Coupon not found." });
    }
    const updatedCoupon = await Coupon.findByIdAndUpdate(couponId, updates, {
      new: true,
    });
    res.status(200).json(updatedCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

router.delete("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const deletedCoupon = await Coupon.findByIdAndDelete(couponId);
    if (!deletedCoupon) {
      return res.status(404).json({ error: "Coupon not found." });
    }
    res.status(200).json(deletedCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
