const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date },
  desc: { type: String },
  url: { type: String },
  viewers: [{ type: mongoose.Schema.Types.ObjectId, ref: "UserModel" }],
}, {
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
});

const MovieModel = mongoose.model("MovieModel", MovieSchema, "movies");

module.exports = MovieModel;
