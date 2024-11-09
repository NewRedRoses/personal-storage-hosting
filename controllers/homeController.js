const { getAllFolders } = require("../controllers/folderController");

const homeRouterGet = async (req, res, next) => {
  const folders = await getAllFolders(req, res, next);
  res.render("homePage", { folders: folders });
};
const homeRouterPost = (req, res, next) => {
  console.log(req.file);
};

module.exports = { homeRouterGet, homeRouterPost };
