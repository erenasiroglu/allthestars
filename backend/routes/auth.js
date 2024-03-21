const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await new User({
      username,
      email,
      password,
    });
    await newUser.save();
    res.status(200).json(newUser);
    console.log(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
