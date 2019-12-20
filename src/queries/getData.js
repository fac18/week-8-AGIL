const dbConnection = require("../database/db_connection");

//query to select each Facsters info for cohorts page
const getAllUsers = cb => {
  dbConnection.query(
    "SELECT user_name, image_prof, image_party, quote FROM users",
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    }
  );
};

// query to return all info for each individual Facster's page
const getSpecificUser = (name, cb) => {
  dbConnection.query(
    `SELECT * FROM users WHERE user_name='${name}'`,
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    }
  );
};

module.exports = {
  getAllUsers,
  getSpecificUser,
};
