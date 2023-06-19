exports.checkout = (req, res, next) => {
    res.render("shop/checkout", {pageTitle: "Checkout", path: "/checkout"})
}