const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();

const createFolderPost = async (req, res, next) => {
  if (!req.user) {
    throw new Error("Must be logged in!");
  }
  try {
    await prisma.folder.create({
      data: {
        name: req.body.folder_name,
        user: { connect: { id: req.user.id } },
      },
    });
    res.redirect("/");
  } catch (error) {
    console.error("Error creating folder: ", error);
    next(error);
  }
};

const getAllFolders = async (req, res, next) => {
  if (!req.user || !req.user.id) {
    return res.status(401).send("User not logged in");
  }
  try {
    const folders = await prisma.folder.findMany({
      where: {
        userId: req.user.id,
      },
    });
    return folders;
  } catch (error) {
    console.log("Error getting folders: ", error);
    next(error);
  }
};

const folderViewGet = async (req, res, next) => {
  const folder = await prisma.folder.findFirst({
    where: {
      id: parseInt(req.params.folder_id),
    },
    include: {
      files: true,
    },
  });
  const { files } = folder;
  res.render("folderView", {
    folderName: folder.name,
    folderId: folder.id,
    folderCreatorId: folder.userId,
    files: files,
  });
};

const folderRenamePost = async (req, res, next) => {
  if (!req.user) {
    throw new Error("Not logged in");
  }

  try {
    await prisma.folder.update({
      where: {
        id: parseInt(req.params.folder_id),
      },
      data: {
        name: req.body.folder_name,
      },
    });
    res.redirect(`/folder/${req.params.folder_id}/view`);
  } catch (error) {
    console.error("Error renaming folder: ", error);
  }
};

module.exports = {
  createFolderPost,
  getAllFolders,
  folderViewGet,
  folderRenamePost,
};
