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

const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/", index);
router.get("/cart", isAuth, cartPage);
router.post("/cart-delete-item", isAuth, postCartDeleteProduct);
router.post("/cart", isAuth, postCart);
// router.get("/checkout", checkout);
router.get("/orders", isAuth, getOrders);
router.post("/create-order", isAuth, postOrder);
router.get("/products", getProducts);
router.get("/products/:productId", getProduct);

module.exports = router;
