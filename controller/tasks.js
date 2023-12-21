const getAllTasks = (req, res) => {
  res.send("all items from the file");
};

const createTask = (req, res) => {
  res.json(req.body);
};
const getSignleTask = (req, res) => {
  res.send({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSignleTask,
  updateTask,
  deleteTask,
};
