const mongoose = require("mongoose");

const url =
  "mongodb+srv://hungtran:1192002@cluster0.s1n0o.mongodb.net/F9?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo connected !");
  } catch (error) {
    console.log("error =", error.message);
    process.exit(1);
  }
}
module.exports = { connect };
