const express = require("express");
const app = express();
const port = 3632;
const path = require("path");
const db = require("./Config/db");

app.set("view engine", "ejs");
app.use("/", express.static(path.join(__dirname, "/assest")));
app.use("/Uploads", express.static(path.join(__dirname, "Uploads")));
app.use("/", require("./Router/allrouter"));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return false;
  }
  console.log(`Admin app listening on port ${port}!`);
});
