const express = require("express");
const blogsController = require("../controller/blogs.controller");
const Router = express.Router();
// [GET] /api/blogs/
Router.get("/", blogsController.get_blogs);
Router.post("/", blogsController.index);

module.exports = Router;
