const { Router } = require("express");
const { body } = require("express-validator");
const postRouter = Router();
const postController = require("../controllers/postController");

//getallposts
postRouter.get("/", postController.getAllPosts);
// postRouter.get("/", (req, res) => {
//   res.json({ msg: "hi here are the posts" });
// });

module.exports = postRouter;
