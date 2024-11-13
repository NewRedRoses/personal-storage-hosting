const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();
const { getAllFolders } = require("../controllers/folderController");

const homeRouterGet = async (req, res, next) => {
  const folders = await getAllFolders(req, res, next);
  const files = await prisma.file.findMany({
    where: {
      userId: req.user.id,
    },
  });
  res.render("homePage", { folders: folders, files: files });
};
const homeRouterPost = (req, res, next) => {};

module.exports = { homeRouterGet, homeRouterPost };
