const { Router } = require("express");
const fileRouter = Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { uploadFile } = require("../controllers/fileController");

fileRouter.post("/upload", upload.single("file"), uploadFile);

module.exports = fileRouter;
