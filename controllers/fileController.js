const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();

const fs = require("fs");

const uploadFile = async (req, res, next) => {
  await prisma.file.create({
    data: {
      name: req.file.filename,
      user: { connect: { id: req.user.id } },
      folder: { connect: { id: parseInt(req.params.folder_id) } },
    },
  });
  res.redirect(`/folder/${req.params.folder_id}/view`);
};

const downloadFile = async (req, res, next) => {
  const file = await prisma.file.findFirst({
    where: {
      id: parseInt(req.params.file_id),
    },
  });
  const filePath = `./uploads/${req.user.username}/${file.name}`;
  res.download(filePath, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

const filePageGet = async (req, res, next) => {
  const fileDbDetails = await prisma.file.findFirst({
    where: {
      id: parseInt(req.params.file_id),
    },
    include: {
      folder: true,
    },
  });
  const { size } = fs.statSync(`uploads/mark/${fileDbDetails.name}`);
  fileDbDetails.size = (size / 1000000).toFixed(2);
  res.render("filePage", { file: fileDbDetails });
};

const deleteFile = async (req, res, next) => {
  try {
    const fileToDelete = await prisma.file.delete({
      where: {
        id: parseInt(req.params.file_id),
      },
    });
    console.log("deleted file: ", fileToDelete.name);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { uploadFile, downloadFile, filePageGet, deleteFile };
