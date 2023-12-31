const Cart = require("../models/cart");
const Product = require("../models/product");

exports.cartPage = (req, res, next) => {
  res.render("shop/cart", { pageTitle: "Your Cart", path: "/cart" });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
};
