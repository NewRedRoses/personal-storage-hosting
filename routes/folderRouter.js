const { Router } = require("express");

const folderRouter = Router();

const fileRouter = Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `uploads/${req.user.username}/`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const {
  createFolderPost,
  folderViewGet,
  folderRenamePost,
} = require("../controllers/folderController");

const { uploadFile } = require("../controllers/fileController");
folderRouter.post("/new", createFolderPost);
folderRouter.get("/:folder_id/view", folderViewGet);
folderRouter.post("/:folder_id/rename", folderRenamePost);
folderRouter.post("/:folder_id/upload", upload.single("file"), uploadFile);

module.exports = folderRouter;
