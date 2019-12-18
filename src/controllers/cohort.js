const cohort = require("./../model/index.js");

exports.get = (req, res) => {
  res.render("cohort", { cohort });
};
