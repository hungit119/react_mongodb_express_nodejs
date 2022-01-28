const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");

const db = require("./config/index.config");
const route = require("./routes/index.route");

const Port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

db.connect();

const Courses = require("./model/courses.model");
const titleModel = require("./model/coursesBody/title.model");
const lessonsModel = require("./model/coursesBody/titlesBody/lesson.model");
async function createCourses() {
  const courses = new Courses({
    title: "title",
    img: "img",
    description: "des",
    feature: ["feature"],
    subscribed: false,
    trailer: "trailer",
    video: ["video"],
    lessons: 12,
    time: { hour: 12, minute: 12 },
    slogan: "slogan",
    session: 12,
    body: [],
    require: ["required"],
  });
  await courses.save();
  console.log("saved");
}
async function UpdateCourses() {
  const course = await Courses.findById("61ee60e9f088abc2bc2dd8a3");
}
async function CreateLessons() {
  const lesson = new lessonsModel({
    title: "lesson 2",
    link: "link 2",
    title_id: "61ed3808e956d78636948e45",
    course_id: "61ee64a3069879a1b0333af5",
  });
  await lesson.save();
}
async function createTitle() {
  const title = new titleModel({
    title: "title 2",
    courses_id: "61ee64a3069879a1b0333af5",
  });
  await title.save();
}
// createCourses();
// UpdateCourses();
// CreateLessons();
// createTitle();
route(app);

app.listen(Port, () => {
  console.log(`App listening http://localhost:${Port}`);
});
