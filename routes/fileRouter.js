const { Router } = require("express");
const fileRouter = Router();
const multer = require("multer");

const {
  downloadFile,
  filePageGet,
  deleteFile,
} = require("../controllers/fileController");

fileRouter.get("/:file_id/view", filePageGet);
fileRouter.post("/:file_id/download", downloadFile);
fileRouter.post("/:file_id/delete", deleteFile);

module.exports = fileRouter;
