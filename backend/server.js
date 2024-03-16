const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://eren-e-commerce:K8Lfj88BSvsopABn@mern-e-commerce.ksa88ap.mongodb.net/",
      {}
    );
    console.log(`MongoDB connected`);
  } catch (error) {
    throw error;
  }
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Macbook",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Old Car",
      image: "https://via.placeholder.com/150",
    },
  ];
  res.json(products);
});

app.listen(port, () => {
    connectDB();
  console.log(`Server is running on port ${port}`);
});
