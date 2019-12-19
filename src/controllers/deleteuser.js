const deleteData = require("./../queries/deleteData");

exports.delete = (req, response) => {
  const name = req.url.split("=")[1];
  const formattedName = name[0].toUpperCase() + name.slice(1);
  deleteData(formattedName, (err, result) => {
    if (err) {
      throw err;
    } else {
      response.redirect("/cohort");
    }
  });
};
