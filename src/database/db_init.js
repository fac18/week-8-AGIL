const runDbBuild = require("./db_build");

runDbBuild((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
