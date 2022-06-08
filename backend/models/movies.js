const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  release_date: { type: String },
  desc: { type: String },
  genres: { type: Array },
  poster_path: { type: String },
  viewers: [{ type: mongoose.Schema.Types.ObjectId, ref: "UserModel" }],
});

const MovieModel = mongoose.model("MovieModel", MovieSchema, "movies");

module.exports = MovieModel;
