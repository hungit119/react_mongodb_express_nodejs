const Courses = require("../model/courses.model");
const Titles = require("../model/coursesBody/title.model");
const Lessons = require("../model/coursesBody/titlesBody/lesson.model");
class CoursesController {
  //[POST] /api/courses/
  async index(req, res) {
    try {
      const {
        title,
        img,
        description,
        feature,
        trailer,
        lessons,
        time,
        session,
      } = req.body;
      const features = feature.split("\n");
      const requires = [
        "Máy vi tính kết nối internet (Windows, Ubuntu hoặc MacOS)",
        "Ý thức tự học cao, trách nhiệm cao, kiên trì bền bỉ không ngại cái khó",
        "Không được nóng vội, bình tĩnh học, làm bài tập sau mỗi bài học",
        "Khi học nếu có khúc mắc hãy tham gia hỏi/đáp tại group FB: Học lập trình web (fullstack.edu.vn)",
        "Bạn không cần biết gì hơn nữa, trong khóa học tôi sẽ chỉ cho bạn những gì bạn cần phải biết",
      ];
      const times = time.split(",");

      const slogan = "Học mọi lúc mọi nơi";
      const video = ["Nhảy sang phần video"];
      const body = ["Nội dung khóa học"];
      const newCourses = new Courses({
        title,
        img,
        description,
        feature: features,
        subscribed: false,
        trailer,
        video,
        lessons,
        time: {
          hour: times[0],
          minute: times[1],
        },
        slogan,
        session,
        body,
        require: requires,
      });

      await newCourses.save();
      res.json({
        success: true,
        message: "created courses",
        newCourses,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
        newCourses: null,
      });
    }
  }
  async get_courses(req, res) {
    try {
      const courses = await Courses.find({});
      res.json({
        success: true,
        message: "Get courses success",
        courses,
      });
    } catch (error) {
      console.log(error.message);
      res.status(400).json({
        success: false,
        message: "Get courses ERROR",
        courses: null,
      });
    }
  }
  async get_course(req, res) {
    const { id } = req.body;
    try {
      const course = await Courses.findOne({ _id: id });
      const titles = await Titles.find({ courses_id: id });
      const lessons = await Lessons.find({
        course_id: id,
      });
      console.log(lessons);
      res.json({
        success: true,
        message: "get course done",
        result: {
          course,
          titles,
          lessons,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        course: null,
      });
    }
  }

  async createTitle(req, res) {
    const { title } = req.body;
    const newTitle = new Titles(title);
    await newTitle.save();
    await res.json({
      success: true,
      message: "created title",
      newTitle,
    });
  }
  async createLesson(req, res) {
    const { newLesson } = req.body;
    const lesson = new Lessons(newLesson);
    await lesson.save();
    await res.json({
      success: true,
      message: "Create lesson done !",
      lesson,
    });
  }
}
module.exports = new CoursesController();
