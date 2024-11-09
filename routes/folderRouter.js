const { Router } = require("express");

const folderRouter = Router();

const {
  createFolderPost,
  folderViewGet,
} = require("../controllers/folderController");

folderRouter.post("/new", createFolderPost);
folderRouter.get("/:folder_id/view", folderViewGet);

module.exports = folderRouter;
