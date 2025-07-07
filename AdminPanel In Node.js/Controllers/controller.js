const adminTbl = require("../Models/allData");
const imageMiddlwear = require("../Models/allData");
const fs = require("fs");
const path = require("path");

const dashboard = (req, res) => {
  res.render("dashboard");
};

const tables = async (req, res) => {
  try {
    const addProducts = await adminTbl.find({});

    res.render("tabal", { addProducts });
  } catch (err) {
    console.log(err);
  }
};

const addProduct = (req, res) => {
  res.render("addProduct");
};
const signup = (req, res) => {
  res.render("signup");
};
const signin = (req, res) => {
  res.render("signin");
};

const editProduct = async (req, res) => {
  let id = req.query.id;
  try {
    const singleData = await adminTbl.findById(id);

    res.render("editProduct", { singleData });
  } catch (error) {
    console.log(error);
  }
};
const profile = (req, res) => {
  res.render("profile");
};

const addNewProduct = async (req, res) => {
  try {
    const { productName, price, description } = req.body;
    let image = "";
    if (req.file) {
      image = imageMiddlwear.addPath + req.file.filename;
    }

    await adminTbl.create({
      productName,
      price,
      description,
      image,
    });

    res.redirect("/tables");
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  let id = req.query.id;
  const { productName, price, description } = req.body;
  try {
    let image = "";
    if (req.file) {
      image = imageMiddlwear.addPath + req.file.filename;
      let oldImageDelete = await adminTbl.findById(id);
      fs.unlinkSync(path.join(__dirname, "..", oldImageDelete.image));

      await adminTbl.findByIdAndUpdate(id, {
        productName,
        price,
        description,
        image,
      });

      res.redirect("/tables");
    } else {
      await adminTbl.findByIdAndUpdate(id, {
        productName,
        price,
        description,
      });
      res.redirect("/tables");
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  let id = req.query.id;
  try {
    let deleteData = await adminTbl.findByIdAndDelete(id);
    fs.unlinkSync(path.join(__dirname, "..", deleteData.image));
    res.redirect("/tables");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  dashboard,
  tables,
  addProduct,
  signup,
  signin,
  editProduct,
  profile,
  addNewProduct,
  updateProduct,
  deleteProduct,
};
