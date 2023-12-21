const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connection");
require("dotenv").config();

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Welcome to task manager");
});
// tasks routes
app.use("/api/v1/tasks", tasks);

const PORT = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("server is listening on port 3000...");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
