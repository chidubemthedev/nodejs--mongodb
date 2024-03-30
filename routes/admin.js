const express = require("express");

const {
  getAddProductPage,
  postAddProduct,
  adminProductsPage,
  getEditProduct,
  postEditProduct,
  postDeleteProduct,
} = require("../controllers/admin");

const isAuth = require("../middleware/is-auth");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", isAuth, getAddProductPage);

// /admin/add-product => POST
router.post("/add-product", isAuth, postAddProduct);

router.get("/products", isAuth, adminProductsPage);

router.get("/edit-product/:productId", isAuth, getEditProduct);

router.post("/edit-product", isAuth, postEditProduct);

router.post("/delete-product", isAuth, postDeleteProduct);

module.exports = router;
