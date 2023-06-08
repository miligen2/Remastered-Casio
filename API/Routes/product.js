const express = require("express");

const productController = require("../controller/product");

const router = express.Router();


// Http://localhost:3003/api/... 
router.get("/products", productController.getProducts);

router.post("/product", productController.createProduct);

router.get('product/:id',productController.getById)






router.delete("/product",productController.deletProduct);

router.patch("/product",productController.updateProduct);

module.exports = router;
