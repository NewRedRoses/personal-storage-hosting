const { Router } = require("express");

const loginRouter = Router();

loginRouter.get("", (req, res) => {
  res.render("loginPage");
});

loginRouter.post("", (req, res) => {
  console.log("test");
});

module.exports = loginRouter;
