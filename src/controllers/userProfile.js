const cohort = require("./../model/index");

exports.get = (req, res, next) => {
  const { userProfile } = req.params;
  if (cohort.includes(userProfile)) {
    return res.render("userProfile", { userProfile });
  }
  next();
};
