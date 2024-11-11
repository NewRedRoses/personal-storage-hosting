const { Router } = require("express");
const fileRouter = Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `uploads/${req.user.username}/`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""));
  },
});

const upload = multer({ storage: storage });

const { uploadFile, downloadFile } = require("../controllers/fileController");

// fileRouter.post("/upload", upload.single("file"), uploadFile);
fileRouter.get("/:file_id/download", downloadFile);
module.exports = fileRouter;
