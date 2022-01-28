const express = require("express");
const videosController = require("../controller/videos.controller");
const Router = express.Router();
// [GET] /api/courses/
Router.get("/", videosController.get_videos);
Router.post("/", videosController.index);

module.exports = Router;
