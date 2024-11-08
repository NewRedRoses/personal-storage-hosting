const homeRouterGet = (req, res, next) => {
  res.render("homePage");
};
const homeRouterPost = (req, res, next) => {
  console.log(req.file);
};

module.exports = { homeRouterGet, homeRouterPost };
