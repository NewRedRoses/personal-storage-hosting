const { Router } = require("express");
const homeRouter = Router();

const { homeRouterGet } = require("../controllers/homeController");

homeRouter.get("", homeRouterGet);

module.exports = homeRouter;
