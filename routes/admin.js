const express = require("express");

const {
  getAddProductPage,
  postAddProduct,
  adminProductsPage,
  getEditProduct,
} = require("../controllers/products");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", getAddProductPage);

// /admin/add-product => POST
router.post("/add-product", postAddProduct);

router.get("/products", adminProductsPage);

router.get("/edit-product/:productId", getEditProduct);

module.exports = router;
