import express from "express";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/taskController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

//require auth for all task routes
router.use(requireAuth);

router.get("/", getTasks);
router.post("/", createTask);
router.delete("/:id", deleteTask);
router.patch("/:id", updateTask);

export default router;
