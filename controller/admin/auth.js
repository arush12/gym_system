// GET  Request Controller
//  ======================

module.exports.getAdminLogin = (req, res, next) => {
  res.render('admin_login_page');
};

module.exports.getAdminSignup = (req, res, next) => {
  res.render('admin_singup_page');
};

// POST Request Controller

module.exports.postAdminSignup = (req, res, next) => {
  // algorithm for signup Admin 0r Adding Admin
};

module.exports.postAdminLogin = (req, res, next) => {
  // algorithm for login
};
