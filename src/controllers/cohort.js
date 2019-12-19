const getData = require("./../queries/getData");

exports.get = (req, response) => {
  getData.getAllUsers((err, cohort) => {
    if (err) {
      throw error;
    } else {
      response.render("cohort", { cohort });
    }
  });
};
