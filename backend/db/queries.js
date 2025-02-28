const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

module.exports = {
  getPosts,
};
