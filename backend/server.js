const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
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

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
