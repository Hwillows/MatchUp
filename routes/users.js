var express = require("express");
var router = express.Router();
const db = require("../model/helper");

//  GET ENTIRE USERS LIST FROM users TABLE in matchup DB
router.get("/", function (req, res, next) {
  db("SELECT * FROM users;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

//  GET ENTIRE TASKS LIST FROM tasks TABLE in matchup DB
router.get("/tasks", function (req, res, next) {
  db("SELECT * FROM tasks;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

// GET ONE TASK
//localhost:5002/users/tasks/1
router.get("/tasks/:id", function (req, res, next) {
  db(`SELECT * FROM tasks WHERE id=${req.params.id};`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

// GET ONE USER
//http://localhost:5002/users/1
router.get("/:id", function (req, res, next) {
  db(`SELECT * FROM users WHERE id=${req.params.id};`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

//localhost:5002/tasks/showTasks
//GET matched names and their matched task
router.get("/showTasks", function (req, res, next) {
  db(
    `SELECT users.user_name, users.task_id FROM users INNER JOIN tasks ON users.task_id = tasks.id;`
  )
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.put("/", (req, res) => {
  const task_id = req.body.task_id; //variable names need to match front end
  const user_id = req.body.user_id; //may need to add 2nd uder_id for a second user
  db(`UPDATE users SET task_id = ${task_id}  WHERE id = ${user_id};`).then(
    () => {
      db("SELECT * FROM users ORDER BY id ASC;")
        .then((results) => {
          res.send(results.data);
        })
        .catch((err) => res.status(500).send(err));
    }
  );
});

module.exports = router;
