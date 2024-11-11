const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();

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

module.exports = { uploadFile, downloadFile };
