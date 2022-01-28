const express = require("express");
const coursesController = require("../controller/courses.controller");
const CoursesController = require("../controller/courses.controller");
const Router = express.Router();
// [GET] /api/courses/
Router.post("/course/title", coursesController.createTitle);
Router.post("/course/lesson", coursesController.createLesson);
Router.get("/", coursesController.get_courses);
Router.post("/", coursesController.index);
Router.post("/course", coursesController.get_course);

module.exports = Router;
