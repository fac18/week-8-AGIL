const getData = require("./../queries/getData");

exports.get = (request, response) => {
  const { userProfile } = request.params;
  getData.getSpecificUser(userProfile, (err, res) => {
    if (err) {
      throw error;
    } else {
      if (!res.length) {
        response.status(404).render("error", {
          layout: "error",
          statusCode: 404,
          errorMessage: "Page not found - where the FAC is it?!",
          err: null,
        });
      } else {
        response.render("userProfile", res[0]);
      }
    }
  });
};

// const getSpecificUser = (name, cb) => {
//   dbConnection.query(`SELECT * FROM users WHERE user_name='${name}'`, (err, res) => {
//       if (err) {
//           cb(err);
//       } else {
//           cb(null, res.rows);
//       }
//   });
// };

// const cohort = require("./../model/index");

// exports.get = (req, res, next) => {
//   const { userProfile } = req.params;
//   if (cohort.includes(userProfile)) {
//     return res.render("userProfile", { userProfile });
//   }
//   next();
// };
