const { Router } = require("express");

const folderRouter = Router();

const { createFolderPost } = require("../controllers/folderController");

folderRouter.post("/new", createFolderPost);

module.exports = folderRouter;
