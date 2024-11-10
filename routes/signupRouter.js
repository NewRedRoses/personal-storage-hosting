const { Router } = require("express");

const signupRouter = Router();

const {
  signupRouterGet,
  signupRouterPost,
} = require("../controllers/signupController");

signupRouter.get("", signupRouterGet);
signupRouter.post("", signupRouterPost);

module.exports = signupRouter;
