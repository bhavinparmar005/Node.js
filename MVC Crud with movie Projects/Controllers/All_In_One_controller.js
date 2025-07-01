const movieTbl = require("../models/admin");
const fs = require("fs");

const home = async (req, res) => {
  try {
    let movieData = await movieTbl.find({});
    return res.render("Home", { movieData });
  } catch (error) {
    console.log(error);
  }
};

const addMovie = (req, res) => {
  return res.render("AddMovie");
};

const addmovieData = (req, res) => {
  const { title, director, rating, releaseDate, description } = req.body;

  let image = "";

  if (req.file) {
    image = req.file.path;
  }
  movieTbl.create({
    image,
    title,
    director,
    rating,
    releaseDate,
    description,
  });

  res.redirect("/");
};

const editmovie = async (req, res) => {
  let id = req.query.id;
  try {
    let editData = await movieTbl.findById(id);
    return res.render("EditMovie", { editData });
  } catch (error) {
    console.log(error);
  }
};

const updateMovie = async (req, res) => {
  let id = req.query.id;
  const { title, director, rating, releaseDate, description } = req.body;
  let image = "";
  try {
    if (req.file) {
      let oldimageRemove = await movieTbl.findById(id);
      fs.unlinkSync(oldimageRemove.image);

      image = req.file.path;

      await movieTbl.findByIdAndUpdate(id, {
        image,
        title,
        director,
        rating,
        releaseDate,
        description,
      });
      res.redirect("/");
    } else {
      await movieTbl.findByIdAndUpdate(id, {
        title,
        director,
        rating,
        releaseDate,
        description,
      });

      res.redirect("/");
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteMovie = async (req, res) => {
  let id = req.query.id;

  try {
    let deleteMovie = await movieTbl.findByIdAndDelete(id)
    fs.unlinkSync(deleteMovie.image)
    res.redirect("/");
  } catch (error) {
    console.log(id);
  }
};

module.exports = {
  home,
  addMovie,
  editmovie,
  addmovieData,
  updateMovie,
  deleteMovie,
};
