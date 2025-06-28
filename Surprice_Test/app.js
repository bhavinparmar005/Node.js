const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const db = require("./config/db")
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./router/allRouter"));

app.use("/uploads", express.static(path.join(__dirname,"uploads")))

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server start in port : -" + port);
});
