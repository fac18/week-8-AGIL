const tape = require("tape");
const runDbBuild = require("../src/database/db_build");
const getData = require("../src/queries/getData");
const postData = require("../src/queries/postData");
const deleteData = require("../src/queries/deleteData");

const allUsers = [
  {
    name: "Ayub",
    image_prof: "URLHERE",
    image_party: "URLHERE",
    quote: '"Alright, boss!"',
  },
  {
    name: "Gillian",
    image_prof: "URLHERE",
    image_party: "URLHERE",
    quote: '""',
  },
  {
    name: "Nikke",
    image_prof: "URLHERE",
    image_party: "URLHERE",
    quote: '"Unlimited Graph Paper!"',
  },
  {
    name: "Rosa",
    image_prof: "URLHERE",
    image_party: "URLHERE",
    quote: '"Bruhhh"',
  },
  {
    name: "Reda",
    image_prof: "URLHERE",
    image_party: "URLHERE",
    quote: '"Thats really great!"',
  },
];

tape("check we return all facers for cohort page", t => {
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
