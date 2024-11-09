const { Router } = require("express");

const folderRouter = Router();

const {
  createFolderPost,
  folderViewGet,
  folderRenamePost,
} = require("../controllers/folderController");

folderRouter.post("/new", createFolderPost);
folderRouter.get("/:folder_id/view", folderViewGet);
folderRouter.post("/:folder_id/rename", folderRenamePost);

module.exports = folderRouter;
