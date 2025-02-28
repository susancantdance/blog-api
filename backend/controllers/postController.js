const db = require("../db/queries");

async function getAllPosts(req, res, next) {
  const posts = await db.getPosts();
  res.json(posts);
}

module.exports = {
  getAllPosts,
};
