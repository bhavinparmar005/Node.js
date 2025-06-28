const adminTbl = require("../model/admin");
const fs = require("fs");

const index = (req, res) => {
  adminTbl
    .find({})
    .then((allData) => {
      return res.render("home", { allData });
    })
    .catch((err) => {
      console.log(err);
    });
};

const addData = (req, res) => {
  const { title } = req.body;

  let image = "";

  if (req.file) {
    image = req.file.path;
  }
  adminTbl.create({
    title,
    image,
  });

  // console.log(title);

  res.redirect("/");
};

const deleteData = (req, res) => {
  let id = req.query.id;
  console.log(id);

  adminTbl
    .findByIdAndDelete(id)
    .then((success) => {
      fs.unlinkSync(success.image);
      console.log("data deleted successFully");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const editData = (req, res) => {
  let id = req.query.id;

  adminTbl
    .findById(id)
    .then((singleData) => {
      res.render("edit", { singleData });
    })
    .catch((err) => {
      console.log(err);
    });
};

const update = (req, res) => {
  let id = req.query.id;
  console.log(id)
  const { title } = req.body;
  let image = "";

  if (req.file) {
    image = req.file.path;
    adminTbl
      .findById(id)
      .then((oldimage) => {
        fs.unlinkSync(oldimage.image);
        adminTbl
          .findByIdAndUpdate(id, {
            title,
            image,
          })
          .then((success) => {
            console.log("data updated!!");
            res.redirect("/")
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  } 
  else {
    adminTbl
      .findByIdAndUpdate(id, {
        title,
      })
      .then((success) => {
        console.log("data updated!!");
          res.redirect("/")
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

module.exports = {
  index,
  addData,
  deleteData,
  editData,
  update,
};
