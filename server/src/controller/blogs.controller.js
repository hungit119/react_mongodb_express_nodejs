const Blogs = require("../model/blog.model");
class BlogsController {
  //[POST] /api/blogs/
  async index(req, res) {
    try {
      const { img, title, description } = req.body;
      const newBlogs = new Blogs({
        user: "61c29a68b85c4e1789c5eb2c",
        img,
        title,
        description,
      });
      await newBlogs.save();
      res.json({
        success: true,
        message: "created blog !!",
        newBlogs,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
        newBlogs: null,
      });
    }
  }
  async get_blogs(req, res) {
    try {
      const blogs = await Blogs.find({}).populate("user");
      res.json({
        success: true,
        message: "Get blogs success",
        blogs,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
        blogs: null,
      });
    }
  }
}
module.exports = new BlogsController();
