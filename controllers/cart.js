exports.cartPage = (req, res, next) => {
  res.render("shop/cart", { pageTitle: "Your Cart", path: "/cart" });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId
  console.log(prodId)
  res.redirect("/cart")
};
