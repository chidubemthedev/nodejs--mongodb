const mongodb = require("mongodb");
const { getDb } = require("../util/database");
class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    return db
      .collection("users")
      .insertOne(this)
      .then(() => {
        console.log("User Created!");
      })
      .catch((err) => console.log(err));
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ _id: new mongodb.ObjectId(userId) })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  }
}

module.exports = User;
