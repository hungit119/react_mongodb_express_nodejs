const AuthRoute = require("./auth.route");
const CoursesRoute = require("./courses.route");
const BlogsRoute = require("./blogs.route");
const VideosRoute = require("./videos.route");
function route(app) {
  // [http://localhost:8000/]
  app.use("/api/auth", AuthRoute);
  app.use("/api/courses", CoursesRoute);
  app.use("/api/videos", VideosRoute);
  app.use("/api/blogs", BlogsRoute);
}

module.exports = route;
