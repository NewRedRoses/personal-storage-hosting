const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();

const signupRouterGet = (req, res, next) => {
  res.render("signupPage");
};

const signupRouterPost = async (req, res, next) => {
  try {
    await prisma.user.create({
      data: {
        username: req.body.username,
        password: req.body.password,
      },
    });
    res.redirect("/");
  } catch (error) {
    console.log("Error creating user: ", error);
  }
};

module.exports = { signupRouterGet, signupRouterPost };
