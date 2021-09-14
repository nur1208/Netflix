import { Router } from "express";
import { protect } from "../controllers/authController.js";
import {
  createMovie,
  deleteMovie,
  getAllMovie,
  getMovie,
  updateMovie,
} from "../controllers/movieController.js";

const movieRouter = Router();

movieRouter.get("/random");

movieRouter
  .route("/")
  .post(protect, createMovie)
  .get(protect, getAllMovie);

movieRouter
  .route("/:id")
  .put(protect, updateMovie)
  .delete(protect, deleteMovie)
  .get(getMovie);

export default movieRouter;

// //GET ALL

// router.get("/", verify, async (req, res) => {
//   if (req.user.isAdmin) {
//     try {
//       const movies = await Movie.find();
//       res.status(200).json(movies.reverse());
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(403).json("You are not allowed!");
//   }
// });
