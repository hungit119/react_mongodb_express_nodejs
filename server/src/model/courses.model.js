const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Courses = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "users" },
    title: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    feature: { type: Array },
    subscribed: { type: Boolean, required: true },
    trailer: { type: String, required: true },
    video: { type: Array, required: true },
    lessons: { type: Number, required: true },
    time: { type: Object, required: true },
    slogan: { type: String, required: true },
    session: { type: Number, required: true },
    body: { type: Array, required: true },
    require: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("courses", Courses);
