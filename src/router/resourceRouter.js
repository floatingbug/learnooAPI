const resourceRouter = require("express").Router();
const resourceController = require("@controller/resource");


resourceRouter.get("/get-avatars", resourceController.getAvatars);


module.exports = resourceRouter;
