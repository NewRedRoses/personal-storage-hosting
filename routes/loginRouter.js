const { Router } = require("express");

const loginRouter = Router();

const {
  loginRouterGet,
  loginRouterPost,
} = require("../controllers/loginController");

loginRouter.get("", loginRouterGet);

loginRouter.post("", loginRouterPost);

module.exports = loginRouter;
