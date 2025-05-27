const express = require("express");
const app = express();
require("dotenv").config();
app.set("view engine", "ejs");

let products = [];

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("Home", { products: products });
});

app.get("/add", (req, res) => {
  res.render("AddPost");
});

app.post("/add", (req, res) => {
  const { title, description, image, price } = req.body;

  const product = {
    id: products.length + 1,
    title: title,
    description: description,
    image: image,
    price: price,
  };

  products.push(product);

  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  let id = req.params.id;

  let oldData = products.find((val) => val.id == id);

  res.render("EditPost", { oldData: oldData });
});

app.post("/edit/:id", (req, res) => {
  const { title, description, image, price } = req.body;

  let editid = req.params.id; 

  let editData = products.find((val) => val.id == editid);

  editData.title = title;
  editData.description = description;
  editData.image = image;
  editData.price = price;

  res.redirect("/");
});

app.get("/deleteproduct/:id", (req,res)=>{

  let id = req.params.id;

  let deleteProduct = products.filter((val)=> val.id != id )

  products = deleteProduct
  res.redirect("/")

})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
