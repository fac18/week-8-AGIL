const test = require("tape");
const request = require("supertest");
const app = require("../src/index.js");
const qs = require("qs");
const runDbBuild = require("../src/database/db_build");

test("test that tape is working", t => {
  t.equals(1, 1, "one should equal one");
  t.end();
});

test("/ root route html test", t => {
  request(app)
    .get("/")
    .expect(200)
    .expect("content-type", /html/)
    .end((err, res) => {
      t.error(err, "Should be no error message");
      t.end();
    });
});

test("public folder css test", t => {
  request(app)
    .get("/css/style.css")
    .expect(200)
    .expect("content-type", /css/)
    .end((err, res) => {
      t.error(err, "Should be no error message");
      t.end();
    });
});

test("public folder css test", t => {
  request(app)
    .get("/css/reset.css")
    .expect(200)
    .expect("content-type", /css/)
    .end((err, res) => {
      t.error(err, "Should be no error message");
      t.end();
    });
});

test("public folder javascript test", t => {
  request(app)
    .get("/js/index.js")
    .expect(200)
    .expect("content-type", /javascript/)
    .end((err, res) => {
      t.error(err, "Should be no error message");
      t.end();
    });
});

test("/cohort endpoint html test", t => {
  request(app)
    .get("/cohort")
    .expect(200)
    .expect("content-type", /html/)
    .end((err, res) => {
      t.error(err, "Should be no error message");
      t.end();
    });
});

test("get /cohort/:user endpoint html test", t => {
  request(app)
    .get("/cohort/Rosa")
    .expect(200)
    .expect("content-type", /html/)
    .end((err, res) => {
      t.error(err, "Should be no error message");
      t.end();
    });
});

test("get /addyourself endpoint html test", t => {
  request(app)
    .get("/addyourself")
    .expect(200)
    .expect("content-type", /html/)
    .end((err, res) => {
      t.error(err, "Should be no error message");
      t.end();
    });
});

test("post /submitnewprofile creates new user", t => {
  const newUserObj = {
    user_name: "gillybear",
    quote: "i'm a bear",
    emoji: "🐻",
  };
  const newUserQueryString = qs.stringify(newUserObj);

  request(app)
    .post("/submitnewprofile")
    .send(newUserQueryString)
    .expect(302)
    .end((err, res) => {
      t.error(err, "Should be no error message");
      t.end();
    });
});

// test("delete /deleteuser test", t => {
//   request(app)
//     .get("/deleteuser?user_name=gillybear")
//     .expect(302)
//     .end((err, res) => {
//       t.error(err, "Should be no error message");
//       t.end();
//     });
// });

test("404 test", t => {
  request(app)
    .get("/rabbit")
    .expect(404)
    .expect("content-type", /html/)
    .end((err, res) => {
      t.error(err, "Should be no error message");
      t.end();
    });
});

test("close server", t => {
  app.close();
  t.end();
});
