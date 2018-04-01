"use strict";

const express = require("express");
const router = express.Router();
const sessionAuth = require("../lib/sessionAuth");


router.use(sessionAuth());


router.get("/", (req, res, nect) => {
  res.render("about");
});



module.exports = router;