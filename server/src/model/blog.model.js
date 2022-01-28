const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Blogs = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "users" },
    img: { type: String, required: true },
    title: { type: String, require: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("blogs", Blogs);
