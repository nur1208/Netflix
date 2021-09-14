import { Router } from "express";
import { protect } from "../controllers/authController.js";
import {
  createList,
  deleteList,
  getList,
} from "../controllers/listController.js";

const listRouter = Router();

listRouter.use(protect);

listRouter.route("/").post(createList).get(getList);

listRouter.delete("/:id", deleteList);

export default listRouter;
