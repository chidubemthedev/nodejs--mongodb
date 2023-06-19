const express = require("express");

const { getProducts, productPage, index  } = require("../controllers/products");
const { cartPage } = require("../controllers/cart");
const { checkout } = require("../controllers/checkout");

const router = express.Router();

router.get("/", index);
router.get("/cart", cartPage);
router.get("/checkout", checkout);
router.get('/products', getProducts);


module.exports = router;
