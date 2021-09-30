import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String },
    imgURL: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    trailerURL: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    genres: { type: [String] },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;
