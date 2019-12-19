const tape = require("tape");
const runDbBuild = require("../src/database/db_build");
const getData = require("../src/queries/getData");
const postData = require("../src/queries/postData");
const deleteData = require("../src/queries/deleteData");

const allUsers = [
  {
    user_name: "Ayub",
    image_prof: "https://imgur.com/YRvPBum.jpg",
    image_party: "https://imgur.com/01UUNru.jpg",
    quote: '"Alright, boss!"',
  },
  {
    user_name: "Gillian",
    image_prof: "https://imgur.com/poIIAAj.jpg",
    image_party: "https://imgur.com/tJeRoSc.jpg",
    quote: '"Thats wild!"',
  },
  {
    user_name: "Nikke",
    image_prof: "https://imgur.com/GeHdEeC.jpg",
    image_party: "https://imgur.com/uQBYZHj.jpg",
    quote: '"Unlimited Graph Paper!"',
  },
  {
    user_name: "Rosa",
    image_prof: "https://imgur.com/912CuwX.jpg",
    image_party: "https://imgur.com/VzQcMw5.jpg",
    quote: '"Bruhhh"',
  },
  {
    user_name: "Reda",
    image_prof: "https://imgur.com/YOderk2.jpg",
    image_party: "https://imgur.com/IQQz6Qt.jpg",
    quote: '"Thats really great!"',
  },
];

//for post test
const userInput = {
  user_name: "Bailey",
  cohort_id: 1,
  image_prof:
    "https://www.britishcockapoosociety.com/uploads/2/2/4/0/22400904/published/17760234-10154767344258882-3892042461596563925-n_1.jpg?1491743281",
  image_party:
    "https://ih1.redbubble.net/image.196335155.1563/flat,750x1000,075,f.u1.jpg",
  quote: '"Woof!"',
  emoji: "🌭",
  tea_coffee: "Pond water",
  hogwarts: "Gryffindor",
  cuisine: "Bones",
  fruit: "Bleuhghghgh",
  snack: "More bones",
  show: "Clifford the big red dog",
  js: "bones()",
  pokemon: "Houndoom",
  emojigram: "🐕🦴",
};

tape("1. Check we return all facsters for cohort page", t => {
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

tape("2. Check we return all data for a specific user", t => {
  const expected = {
    user_id: 1,
    user_name: "Ayub",
    cohort_id: 1,
    image_prof: "https://imgur.com/YRvPBum.jpg",
    image_party: "https://imgur.com/01UUNru.jpg",
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

// tape("3. Check we can delete a specific user ", t => {
//   runDbBuild((err, res) => {
//     if (err) {
//       throw err;
//     }
//     deleteData.deleteUser(user_name, (err, res) => {
//       if (err) {
//         throw err;
//       }
//       t.deepEqual(res, "", "should return empty");
//       t.end();
//     });
//   });
// });

tape("4. Check we can add new profile", t => {
  runDbBuild((err, res) => {
    if (err) {
      throw err;
    }
    postData(userInput, (err, res) => {
      if (err) {
        throw err;
      } else {
        getData.getSpecificUser(userInput.user_name, (err, res) => {
          if (err) {
            throw err;
          } else {
            t.deepEqual(
              res[0].user_name,
              userInput.user_name,
              "New username should match"
            );
            t.end();
          }
        });
      }
    });
  });
});
