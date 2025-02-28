const { Router } = require("express");
const { body } = require("express-validator");
const indexRouter = Router();
// const controller = require("../controllers/indexController");
// const passport = require("passport");

indexRouter.get("/", (req, res) => {
  res.json({ msg: "hey you got something!" });
});

module.exports = indexRouter;
