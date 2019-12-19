const app = require("./app");

module.exports = app.listen(app.get("port"), () => {
  console.log("app running on port", app.get("port"));
});
