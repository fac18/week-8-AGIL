const test = require("tape");
const request = require("supertest");
const app = require("../src/index.js");

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
    .get("/public/css/style.css")
    .expect(200)
    .expect("content-type", /css/)
    .end((err, res) => {
      t.error(err, "Should be no error message");
      t.end();
    });
});

test("public folder css test", t => {
  request(app)
    .get("/public/css/reset.css")
    .expect(200)
    .expect("content-type", /css/)
    .end((err, res) => {
      t.error(err, "Should be no error message");
      t.end();
    });
});

test("public folder javascript test", t => {
  request(app)
    .get("/public/js/index.js")
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

test("/userprofile endpoint html test", t => {
  request(app)
    .get("/userprofile")
    .expect(200)
    .expect("content-type", /html/)
    .end((err, res) => {
      t.error(err, "Should be no error message");
      t.end();
    });
});

test("/createuser endpoint html test", t => {
  const newUser = {
    name: "gillybear",
    quote: "i'm a bear",
    emoji: "🐻",
  };

  request(app)
    .post("/createuser")
    .send(newUser)
    .expect(201)
    .end((err, res) => {
      t.error(err, "Should be no error message");
      console.log(typeof res.body);
      t.deepEqual(res.body[0], newUser, "should return new user gillybear");
      t.end();
    });
});
