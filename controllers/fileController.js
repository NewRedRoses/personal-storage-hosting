const uploadFile = async (req, res, next) => {
  console.log(req.file);
  res.send("file uploaded");
};

module.exports = { uploadFile };
