const { Router } = require("express");
const fileRouter = Router();
const multer = require("multer");

const { downloadFile, filePageGet } = require("../controllers/fileController");

fileRouter.get("/:file_id/view", filePageGet);
fileRouter.post("/:file_id/download", downloadFile);

module.exports = fileRouter;
