const postData = require("./../queries/postData");

exports.post = (req, res) => {
  const userInput = req.body;

  //convert first letter of username to uppercase
  userInput.user_name =
    userInput.user_name.length > 1
      ? userInput.user_name[0].toUpperCase() + userInput.user_name.slice(1)
      : userInput.user_name[0].toUpperCase();

  postData(userInput, (err, response) => {
    if (err) {
      throw err;
    } else {
      res.redirect("/cohort");
    }
  });
};
