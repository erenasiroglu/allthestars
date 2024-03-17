const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const mainRoute = require("./routes/index.js");
const port = 5000;

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {}
    );
    console.log(`MongoDB connected`);
  } catch (error) {
    throw error;
  }
};


app.use("/api", mainRoute);

app.listen(port, () => {
    connectDB();
  console.log(`Server is running on port ${port}`);
});
