const home = (req, res) => {
  return res.render("Home");
};

const addMovie = (req,res)=>{
  return res.render("AddMovie");

}

module.exports = {
  home,
  addMovie
};
