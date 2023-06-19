exports.cartPage = (req, res, next) => {
  res.render("shop/cart", { pageTitle: "Cart", path: "/cart" });
};
