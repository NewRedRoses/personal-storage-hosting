const express = require("express");
const app = express();

const PORT = 3000;

const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const loginRouter = require("./routes/loginRouter");

app.use("/login", loginRouter);

app.listen(PORT, () => {
  console.log(`Launched on port: ${PORT}`);
});
