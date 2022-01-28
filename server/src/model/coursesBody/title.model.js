const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Titles = new Schema(
  {
    title: { type: String },
    courses_id: { type: Schema.Types.ObjectId, ref: "courses" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("titles", Titles);
