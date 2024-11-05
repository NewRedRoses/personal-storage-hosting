const express = require("express");
const session = require("express-session");
const passport = require("passport");
const { PrismaSessionStore } = require("@quixo3/prisma-session-store");
const { PrismaClient } = require("@prisma/client");

const app = express();

const PORT = 3000;

const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());

const loginRouter = require("./routes/loginRouter");

app.use("/login", loginRouter);

app.listen(PORT, () => {
  console.log(`Launched on port: ${PORT}`);
});
