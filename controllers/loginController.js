const { PrismaClient } = require(`@prisma/client`);
const passport = require("passport");

const prisma = new PrismaClient();
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await prisma.user.findUnique({
        where: { username: username },
      });

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      // compared hashed psswrd to user passwrd at login
      //   const match = await bcrypt.compare(password, user.password);
      if (password != user.password) {
        console.log("Unable to login: passwords do not match");
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    // Get user ID from db that matches arg id set it ‘user’
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    done(null, user);
  } catch (err) {
    done(err);
  }
});

const loginRouterGet = async (req, res, next) => {
  req.user ? res.redirect("/") : res.render("loginPage");
};

const loginRouterPost = async (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })(req, res, next);
};

module.exports = { loginRouterGet, loginRouterPost };
