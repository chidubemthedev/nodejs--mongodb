const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.find()
    // .select("title price -_id")
    // .populate("userId", "name")
    .then((products) => {
      console.log(products);
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "Products",
        path: "/products",
        isLoggedIn: req.session.isLoggedIn,
      });
    })
    .catch((err) => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then((product) => {
      res.render("shop/product-details", {
        product: product,
        pageTitle: product.title,
        path: "/products",
        isLoggedIn: req.isLoggedIn,
      });
    })
    .catch((err) => console.log(err));
};

exports.index = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Home",
        path: "/",
        isLoggedIn: req.session.isLoggedIn,
      });
    })
    .catch((err) => console.log(err));
};
