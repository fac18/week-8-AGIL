const dbConnection = require("../database/db_connection");

const deleteData = (name, cb) => {
  dbConnection.query(
    `DELETE FROM users WHERE user_name = $1;`,
    [name],
    (err, result) => {
      if (err) {
        console.log(err);
        return cb(err);
      } else {
        cb(null, result);
      }
    }
  );
};

module.exports = deleteData;
