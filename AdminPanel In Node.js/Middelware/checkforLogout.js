// const chekforLogout  = (req, res, next) => {
//   if (!req.cookies && !req.cookies.secretData) {
//     return next(); 
//   } else {
//       return res.redirect("/dashboard");
//   }
// };
const chekforLogout = (req, res, next) => {
  // If cookie exists and secretData is set, redirect to dashboard
  if (req.cookies && req.cookies.secretData) {
    return res.redirect("/dashboard");
  } else {
    return next(); // Otherwise, allow to go to signin/signup
  }
};
module.exports = chekforLogout