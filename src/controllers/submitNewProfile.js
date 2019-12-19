const postData = require("./../queries/postData");

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
