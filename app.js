const path = require("path");
const mongoose = require("mongoose");

const express = require("express");
const bodyParser = require("body-parser");
const { get404 } = require("./controllers/404");
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/auth");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("6601557cde5718a95c2c421d")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

// app.use(get404);

mongoose
  .connect(
    "mongodb+srv://shopcontroller:Janeal0y@nodeshop.gu8ivjw.mongodb.net/shop"
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Valentine",
          email: "chidubemthedev@dev.me",
          cart: { items: [] },
        });
        user.save();
      }
    });
    console.log("Connected!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
