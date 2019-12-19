const tape = require("tape");
const runDbBuild = require("../src/database/db_build");
const getData = require("../src/queries/getData");
const postData = require("../src/queries/postData");
const deleteData = require("../src/queries/deleteData");

const allUsers = [
  {
    user_name: "Ayub",
    image_prof: "URLHERE",
    image_party: "URLHERE",
    quote: '"Alright, boss!"',
  },
  {
    user_name: "Gillian",
    image_prof: "URLHERE",
    image_party: "URLHERE",
    quote: '""',
  },
  {
    user_name: "Nikke",
    image_prof: "URLHERE",
    image_party: "URLHERE",
    quote: '"Unlimited Graph Paper!"',
  },
  {
    user_name: "Rosa",
    image_prof: "URLHERE",
    image_party: "URLHERE",
    quote: '"Bruhhh"',
  },
  {
    user_name: "Reda",
    image_prof: "URLHERE",
    image_party: "URLHERE",
    quote: '"Thats really great!"',
  },
];

tape("check we return all facsters for cohort page", t => {
  runDbBuild((err, res) => {
    if (err) {
      throw err;
    }
    getData.getAllUsers((err, res) => {
      if (err) {
        throw err;
      }
      t.deepEqual(res, allUsers, "should return all users");
      t.end();
    });
  });
});

tape("check we return all data for a specific user", t => {
  const expected = {
    user_id: 1,
    user_name: "Ayub",
    cohort_id: 1,
    image_prof: "URLHERE",
    image_party: "URLHERE",
    quote: '"Alright, boss!"',
    emoji: "👀",
    tea_coffee: "No caffeine",
    hogwarts: "Slytherin",
    cuisine: "Rice and chicken",
    fruit: "Pineapple",
    snack: "Fizzy laces",
    show: "Vikings",
    js: "Reduce",
    pokemon: "Charizard",
    emojigram: "👀👀👀👀👀",
  };

  runDbBuild((err, res) => {
    if (err) {
      throw err;
    }
    getData.getSpecificUser("Ayub", (err, res) => {
      if (err) {
        throw err;
      }
      t.deepEqual(res[0], expected, "Should return details for Ayub");
      t.end();
    });
  });
});
