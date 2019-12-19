const express = require("express");
const path = require("path");
const router = express.Router();

const home = require("./home");
const cohort = require("./cohort");
const userProfile = require("./userProfile");
const addYourself = require("./addYourself");
const error = require("./error");

router.get("/", home.get);
router.get("/cohort", cohort.get);
router.get("/cohort/:userProfile", userProfile.get);
router.get("/addyourself", addYourself.get);
router.use(error.client);
router.use(error.server);

module.exports = router;
