const { Router } = require("express");

const folderRouter = Router();

const multer = require("multer");

const upload = multer({ dest: "uploads/" });
const {
  createFolderPost,
  folderViewGet,
  folderRenamePost,
  deleteFolderPost,
} = require("../controllers/folderController");

const { uploadFile } = require("../controllers/fileController");
folderRouter.post("/new", createFolderPost);
folderRouter.get("/:folder_id/view", folderViewGet);
folderRouter.post("/:folder_id/rename", folderRenamePost);
folderRouter.post("/:folder_id/upload", upload.single("file"), uploadFile);
// folderRouter.post("/:folder_id/upload", uploadFile);
folderRouter.post("/:folder_id/delete", deleteFolderPost);
module.exports = folderRouter;
