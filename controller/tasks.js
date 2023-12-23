const Task = require("../models/Tasks");

// this request for the get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send({ tasks });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

// this request for creating a new task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

// this request for the get the single task
const getSignleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `no task with id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};
// this request for the update task
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send({ msg: `No task with id ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

// request for the delete task
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ message: `No Task not found with this id : ${taskID}` });
    }
    // res.status(200).json({ msg: "Task deleted successfully" });
    res.status(200).send({ task: null, status: "success" });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSignleTask,
  updateTask,
  deleteTask,
};
