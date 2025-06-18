const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/E-BookStore");

const database = mongoose.connection;
database.once("open", (err) => {
  if (err) {
    console.log(err);
    return false;
  }
  console.log("Database conneted SuccessFully");
});
