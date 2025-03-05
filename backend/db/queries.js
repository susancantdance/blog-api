const { PrismaClient } = require("@prisma/client");
const { check } = require("express-validator");

const prisma = new PrismaClient();

//signup
async function signup(username, pw) {
  const user = await prisma.user.create({
    data: {
      email: username,
      password: pw,
    },
  });
  return user;
}

//check user exists for local strategy
async function checkUserExists(email) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
}

//check user exists for jwt strategy
async function checkUserExistsId(id) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return user;
}

//check if user is author
async function isAuthor(id) {
  const author = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      isauthor: true,
    },
  });
  return author;
}

//get all posts
async function getPosts() {
  const posts = await prisma.post.findMany({
    include: {
      comments: true,
    },
  });
  return posts;
}

//get a single post
async function getSinglePost(id) {
  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });

  return post;
}

//get all comments for a post
async function getComments(postid) {
  const comments = await prisma.comment.findMany({
    where: {
      postid: postid,
    },
  });
  return comments;
}

//create a post
async function createPost(title, body, authorid, publish) {
  const newpost = await prisma.post.create({
    data: {
      title: title,
      body: body,
      authorid: authorid,
      ispublished: publish,
    },
  });
  return newpost;
}

//update or publish a post
async function updatePost(id, title, body, publish) {
  const updatedpost = await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      body: body,
      ispublished: publish,
    },
  });

  return updatedpost;
}

//delete a post
async function deletePost(id) {
  const deleted = await prisma.post.delete({
    where: {
      id: id,
    },
  });
  return deleted;
}

//create a comment
async function createComment(id, text, userid) {
  const comment = await prisma.comment.create({
    data: {
      postid: id,
      text: text,
      userid: userid,
    },
  });
  return comment;
}

//update comment
async function updateComment(comment_id, text) {
  const updated = await prisma.comment.update({
    where: {
      id: comment_id,
    },
    data: {
      text: text,
    },
  });
  return updated;
}

async function deleteComment(comment_id) {
  const deleted = await prisma.comment.delete({
    where: {
      id: comment_id,
    },
  });

  return deleted;
}

module.exports = {
  signup,
  checkUserExists,
  checkUserExistsId,
  isAuthor,
  getPosts,
  getComments,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
  createComment,
  updateComment,
  deleteComment,
};
