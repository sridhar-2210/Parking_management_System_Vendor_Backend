const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");

const gettask = asyncHandler(async (req, res) => {
  const task = await Task.find().lean();
  res.status(200).json(task);
});

const getTaskById = asyncHandler(async (req, res) => {
  const { id } = req.params; // this is userId, not _id
  const tasks = await Task.find({ userId: id });

  if (!tasks || tasks.length === 0) {
    res.status(404);
    throw new Error("No tasks found for this user");
  }

  res.status(200).json(tasks);
});

const createtask = asyncHandler(async (req, res) => {
  const {
    userId,
    name,
    address,
    latitude,
    longitude,
    totalLots,
    price,
    secretKey,
    features,
    image,
  } = req.body;

  const task = await Task.create({
    userId,
    name,
    address,
    latitude,
    longitude,
    totalLots,
    price,
    secretKey,
    features,
    image,
  });

  console.log(`task created ${task}`);

  if (task) {
    res.status(200).json(task);
  } else {
    res.status(400);
    throw new Error("task not created!");
  }
});

const updatetask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error("task not found");
  }

  const updatedtask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedtask);
});

const deletetask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error("task not found");
  }

  await task.deleteOne();
  res.status(200).json(task);
});

module.exports = {
  gettask,
  createtask,
  updatetask,
  deletetask,
  getTaskById,
};
