const postData = require("./../queries/postData");
const qs = require("qs");

exports.post = (req, res) => {
  const userInput = req.body;
  postData(userInput, (err, response) => {
    if (err) {
      throw err;
    } else {
      res.redirect("/cohort");
    }
  });
};
