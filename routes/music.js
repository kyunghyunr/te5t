'use strict' // vanilla js

let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("music", { title: "MUSIC" });
});

module.exports = router;
