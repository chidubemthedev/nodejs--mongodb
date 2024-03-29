exports.getLogin = (req, res, next) => {
  isLoggedIn = req.get("Cookie").split(";")[2].trim().split("=")[1];
  console.log(isLoggedIn);

  res.render("auth/login", {
    pageTitle: "Login",
    path: "/login",
    isLoggedIn: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader("Set-Cookie", "loggedIn=true");
  res.redirect("/");
};
