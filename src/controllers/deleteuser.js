const deleteData = require("./../queries/deleteData");

exports.delete = (req, response) => {
  const name = req.url.split("=")[1];
  const formattedName =
    name.length > 1
      ? name[0].toUpperCase() + name.slice(1)
      : name[0].toUpperCase;
  deleteData(formattedName, (err, result) => {
    if (err) {
      throw err;
    } else {
      response.redirect("/cohort");
    }
  });
};
