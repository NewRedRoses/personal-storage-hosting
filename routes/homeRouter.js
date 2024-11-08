const { Router } = require("express");
const homeRouter = Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const {
  homeRouterGet,
  homeRouterPost,
} = require("../controllers/homeController");

homeRouter.get("", homeRouterGet);
homeRouter.post("", upload.single("file"), homeRouterPost);

module.exports = homeRouter;
