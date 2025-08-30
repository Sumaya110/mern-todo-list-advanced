import { taskRepository } from "../repositories/taskRepository.js";
import mongoose from "mongoose";
export const getTasks = async (req, res) => {
  const userId = req.user._id;
  const tasks = await taskRepository.find({ userId });
  res.status(200).json(tasks);
};

export const createTask = async (req, res) => {
  const { title, description, status } = req.body;
  const userId = req.user._id;
  try {
    const task = await taskRepository.create({
      title,
      description,
      status,
      userId,
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  console.log(req.params);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such task" });
  }

  const task = await taskRepository.findByIdAndDelete(id);

  if (!task) {
    return res.status(400).json({ error: "No such task" });
  }

  res.status(200).json(task);
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const updateData  = req.body;

  console.log(req.params);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such task" });
  }

  const task = await taskRepository.findByIdAndUpdate( id, updateData);

  if (!task) {
    return res.status(400).json({ error: "No such task" });
  }

  res.status(200).json(task);
};
