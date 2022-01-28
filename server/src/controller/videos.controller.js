const Videos = require("../model/video.model");
class VideosController {
  //[POST] /api/videos/
  async index(req, res) {
    const { title, video, link } = req.body;
    try {
      const newVideo = new Videos({
        user: "61c29a68b85c4e1789c5eb2c",
        title,
        video,
        link,
      });
      await newVideo.save();
      res.json({
        success: true,
        message: "created videos",
        newVideo,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
        newVideo: null,
      });
    }
  }
  //[GET] /api/videos/
  async get_videos(req, res) {
    try {
      const videos = await Videos.find({}).populate("user");
      res.json({
        success: true,
        message: "Get videos success",
        videos,
      });
    } catch (error) {
      console.log(error.message);
      res.status(400).json({
        success: false,
        message: error.message,
        videos: null,
      });
    }
  }
}
module.exports = new VideosController();
