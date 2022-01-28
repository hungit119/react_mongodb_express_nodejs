const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Videos = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "users" },
    title: { type: String, required: true },
    video: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("videos", Videos);
