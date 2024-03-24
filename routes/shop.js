const express = require("express");

const {
  getProducts,
  productPage,
  index,
  getProduct,
} = require("../controllers/products");
const {
  cartPage,
  postCart,
  postCartDeleteProduct,
} = require("../controllers/cart");
const { checkout, postOrder, getOrders } = require("../controllers/checkout");

const router = express.Router();

router.get("/", index);
// router.get("/cart", cartPage);
// router.post("/cart-delete-item", postCartDeleteProduct);
router.post("/cart", postCart);
// router.get("/checkout", checkout);
// router.get("/orders", getOrders);
// router.post("/create-order", postOrder);
router.get("/products", getProducts);
router.get("/products/:productId", getProduct);

module.exports = router;
