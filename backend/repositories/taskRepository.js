import taskModel from "../models/taskModel.js";

const find = async ({ userId }) => {
  const tasks = await taskModel.find({ userId }).sort({createdAt: -1});
  return tasks;
};

const create = async ({ title, description, status, userId }) => {
  const task = await taskModel.create({
    title,
    description,
    status,
    userId,
  });
  return task;
};

const findByIdAndDelete = async (id) => {
  const task = await taskModel.findByIdAndDelete(id);
  return task;
};

const findByIdAndUpdate = async (id, updateData) => {
  const task = await taskModel.findByIdAndUpdate(id, updateData, { new: true });
  return task;
};

export const taskRepository = {
  find,
  create,
  findByIdAndDelete,
  findByIdAndUpdate,
};
