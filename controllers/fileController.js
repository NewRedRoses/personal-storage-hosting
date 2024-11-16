const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();
const cloudinary = require("cloudinary").v2;

const { unlink } = require("node:fs");

cloudinary.config({
  cloud_name: process.env.cloudinary_cloud_name,
  api_key: process.env.cloudinary_api_key,
  api_secret: process.env.cloudinary_api_secret,
});

const uploadFile = async (req, res, next) => {
  try {
    const results = await cloudinary.uploader.upload(
      `./uploads/${req.file.filename}`
    );
    await prisma.file.create({
      data: {
        name: req.file.originalname,
        user: { connect: { id: req.user.id } },
        folder: { connect: { id: parseInt(req.params.folder_id) } },
        url: results.secure_url,
        public_id: results.public_id,
      },
    });

    console.log(results);
    unlink(req.file.path, (err) => {
      console.log(`${req.file.path} was deleted locally`);
    });

    res.redirect(`/folder/${req.params.folder_id}/view`);
  } catch (error) {
    console.log(error);
  }
};

const downloadFile = async (req, res, next) => {
  const file = await prisma.file.findFirst({
    where: {
      id: parseInt(req.params.file_id),
    },
  });

  res.redirect(file.url);
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
    cloudinary.uploader.destroy(fileToDelete.public_id, (result) => {
      console.log(result);
    });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { uploadFile, downloadFile, filePageGet, deleteFile };
