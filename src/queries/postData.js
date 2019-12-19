const dbConnection = require("../database/db_connection");

const postData = (userInput, cb) => {
  dbConnection.query(
    "INSERT INTO users (user_name, cohort_id, image_prof, image_party, quote, emoji, tea_coffee, hogwarts, cuisine, fruit, snack, show, js, pokemon, emojigram) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)",
    [
      userInput.user_name,
      1,
      userInput.image_prof,
      userInput.image_party,
      userInput.quote,
      userInput.emoji,
      userInput.tea_coffee,
      userInput.hogwarts,
      userInput.cuisine,
      userInput.fruit,
      userInput.snack,
      userInput.show,
      userInput.js,
      userInput.pokemon,
      userInput.emojigram,
    ],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = postData;
