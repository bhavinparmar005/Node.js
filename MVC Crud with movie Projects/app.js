const express = require("express");
const app = express();
const db = require("./Config/db")
const path = require("path");
const port = 3632;

app.set("view engine", "ejs");
app.use("/", express.static(path.join(__dirname,"/Assest")));
app.use("/UploadMovieImage" , express.static(path.join(__dirname , "UploadMovieImage")))
app.use("/", require("./Routers/index"));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return false;
  }
  console.log(`Server listening on port ${port} !`);
});
