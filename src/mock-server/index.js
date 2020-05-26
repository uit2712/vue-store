var express = require("express");
var app = express();

const products = [
    { id: 1, title: "iPad 4 Mini", price: 500, inventory: 2 },
    { id: 2, title: "H&M T-Shirt White", price: 11, inventory: 10 },
    { id: 3, title: "Charli XCX - Sucker CD", price: 20, inventory: 5 },
];

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/api/products", (req, res, next) => {
    res.json(products);
});
