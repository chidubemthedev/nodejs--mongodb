exports.getLogin = (req, res, next) => {
  // isLoggedIn = req.get("Cookie").split(";")[2].trim().split("=")[1];
  // console.log(isLoggedIn);

  console.log(req.session.isLoggedIn);
  res.render("auth/login", {
    pageTitle: "Login",
    path: "/login",
    isLoggedIn: false,
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  res.redirect("/");
};
