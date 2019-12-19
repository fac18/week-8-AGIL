const dbConnection = require('../database/db_connection');

const getAllUsers = cb => {
    dbConnection.query('SELECT name, image_prof, image_party, quote FROM users', (err, res) => {
        if (err) {
            cb(err);
        } else {
            cb(null, res.rows);
        }
    });
};

module.exports = {
    getAllUsers
};