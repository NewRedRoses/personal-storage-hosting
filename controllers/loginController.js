const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();

const loginRouterGet = async (req, res) => {
  res.render("loginPage");
};

const loginRouterPost = async (req, res) => {};

module.exports = { loginRouterGet, loginRouterPost };
