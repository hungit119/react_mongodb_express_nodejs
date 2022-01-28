const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Lessons = new Schema(
  {
    title: { type: String },
    link: { type: String },
    title_id: { type: Schema.Types.ObjectId, ref: "titles" },
    course_id: { type: Schema.Types.ObjectId, ref: "courses" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("lessons", Lessons);
