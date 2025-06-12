const express = require("express");
const app = express();
const PORT = 3632;
const path = require("path");
const database = require("./config/database");
const admin = require("./model/main");
// const mongoose =require('mongoose')

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "/Assest")));

// let dbdata = mongoose.model('dbdata',admin)

app.get("/", (req, res) => {
  admin
    .find()
    .then((allData) => {
      res.render("home", { allData: allData });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/getData", (req, res) => {
  let {
    FristName,
    LastName,
    Email,
    Password,
    ConfirmPassword,
    Gender,
    Hobby,
    SourseOfIncome,
    Income,
    ProfilePicture,
    Age,
    Bio,
  } = req.body;

  admin.create({
    FristName,
    LastName,
    Email,
    Password,
    ConfirmPassword,
    Gender,
    Hobby,
    SourseOfIncome,
    Income,
    ProfilePicture,
    Age,
    Bio,
  });
  res.redirect("/");
});

app.get("/deteleData", (req, res) => {
  let id = req.query.id;
  console.log(id);
  admin
    .findByIdAndDelete(id)
    .then((deletedData) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/editData", (req, res) => {
  let editId = req.query.id;

  admin
    .findById(editId)
    .then((currentData) => {
      res.render("edit", { currentData: currentData });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/editData", (req, res) => {
  let {
    FristName,
    LastName,
    Email,
    Password,
    ConfirmPassword,
    Gender,
    Hobby,
    SourseOfIncome,
    Income,
    ProfilePicture,
    Age,
    Bio,
  } = req.body;

  let editId = req.query.id;

  admin
    .findByIdAndUpdate(editId, {
      FristName,
      LastName,
      Email,
      Password,
      ConfirmPassword,
      Gender,
      Hobby,
      SourseOfIncome,
      Income,
      ProfilePicture,
      Age,
      Bio,
    })
    .then((success) => {
      console.log("edit successfully!!");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`server start in port ${PORT}`);
});
