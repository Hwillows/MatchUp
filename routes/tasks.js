var express = require("express");
var router = express.Router();
const db = require("../model/helper");

//  GET ENTIRE TASKS LIST FROM tasks TABLE in matchup DB
router.get("/", function (req, res, next) {
  db("SELECT * FROM tasks;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

/*Selecting columns 'user_name' and 'task_id' from 'users' table and joining it with 'tasks' table.
A temporary table is created that shows matches when the task_id in the users table equals the id of the tasks table. */
router.get("/showTasks", function (req, res, next) {
  db(
    `SELECT users.user_name, users.task_id FROM users INNER JOIN tasks ON users.task_id = tasks.id;`
  )
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
