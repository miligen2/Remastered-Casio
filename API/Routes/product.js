const express = require("express");

const productController = require("../controller/product");

const router = express.Router();

router.get("/products", productController.getProducts);

router.post("/product", productController.createProduct);

router.delete("/product",productController.deletProduct);

router.patch("/product",productController.updateProduct);

module.exports = router;
