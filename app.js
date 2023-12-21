const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Welcome to task manager");
});
// tasks routes
app.use("/api/v1/tasks", tasks);

app.listen(3000, () => {
  console.log("server is listening on port 3000...");
});
