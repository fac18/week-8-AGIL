const post = require("./../queries/postData");
const qs = require("qs");

exports.post = (req, res) => {
  console.log(req.body);
  postData(req.body, (err, response) => {
    if (err) {
      throw err;
    } else {
      res.redirect("/cohort");
    }
  });
};
