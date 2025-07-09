

const auth = checkAdminAuth = (req, res, next) => {
  if (req.cookies && req.cookies.secretData) {
    return next(); 
  } else {
    return res.redirect("/");
  }
};
module.exports =auth