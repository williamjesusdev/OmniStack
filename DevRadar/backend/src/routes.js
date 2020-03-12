const { Router } = require("express");

const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "server is running" });
});

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.create);
routes.get("/devs/:github_username", DevController.read);
routes.put("/devs/:github_username", DevController.update);
routes.delete("/devs/:github_username", DevController.delete);

routes.get("/search", SearchController.index);

routes.all("*", (req, res) => {
  return res.redirect("/");
});

module.exports = routes;
