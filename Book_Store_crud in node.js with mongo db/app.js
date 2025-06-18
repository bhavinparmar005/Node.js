const express = require("express");
const app = express();
const port = 3632;
const path = require("path");
const db = require("./Config/db");
const adminTbl = require("./Model/adminTbl");
const fs = require("fs");
const multer = require("multer");

// const moment = require("moment");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "/Assest")));
app.use("/UploadBookImage",express.static(path.join(__dirname, "/UploadBookImage")));

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "UploadBookImage/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const Imageupload = multer({ storage: fileStorage }).single("image");

app.get("/", (req, res) => {
  adminTbl
    .find({})
    .then((allbooks) => {
      res.render("index", { allbooks: allbooks });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/addbook", (req, res) => {
  res.render("addbook");
});

app.post("/addbook", Imageupload, (req, res) => {
  let image = "";
  const { title, author, price, releaseDate, description } = req.body;
  console.log(req.file);

  if (req.file) {
    image = req.file.path;
  }
  // let newformatDate = moment(releaseDate).format("DD-MM-YYYY");

  adminTbl.create({
    image: image,
    title: title,
    author: author,
    price: price,
    releaseDate: releaseDate,
    description: description,
  });
  res.redirect("/");
});

app.get("/editbook", (req, res) => {
  const currentId = req.query.id;
  adminTbl
    .findById(currentId)
    .then((oldEditData) => {
      res.render("editbook", { oldEditData: oldEditData });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/updatebook", Imageupload, (req, res) => {
  const editid = req.query.id;
  const { title, author, price, releaseDate, description } = req.body;

  if (!req.file) {
    adminTbl
      .findByIdAndUpdate(editid, {
        title: title,
        author: author,
        price: price,
        releaseDate: releaseDate,
        description: description,
      })
      .then((success) => {
        console.log("Edit Book successFully !");
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  } else {
    let image = "";
    if (req.file) {
      image = req.file.path;
      adminTbl
        .findById(editid)
        .then((oldimage) => {
          fs.unlinkSync(oldimage.image);

          adminTbl
            .findByIdAndUpdate(editid, {
              image: image,
              title: title,
              author: author,
              price: price,
              releaseDate: releaseDate,
              description: description,
            })
            .then((success) => {
              console.log("Edit Book successFully !");
              res.redirect("/");
            })
            .catch((err) => {
              console.log(err);
              return false;
            });
        })
        .catch((err) => {
          console.log(err);
          return false;
        });
    }
  }
});

app.get("/deletebook", (req, res) => {
  const deletedId = req.query.id;
  adminTbl
    .findByIdAndDelete(deletedId)
    .then((deleteData) => {
      fs.unlinkSync(deleteData.image);
      console.log("delete Book successFully !");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return false;
  }
  console.log(`server runing Port :- ${port}`);
});
