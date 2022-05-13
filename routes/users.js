var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// router.get("/", (req, res) => {
//   res.send("Welcome to MatchUp!");
// });

//  GET user list
router.get("/", function (req, res, next) {
  db("SELECT * FROM users;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

//  GET task list
router.get("/tasks", function (req, res, next) {
  db("SELECT * FROM tasks;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

// GET one TaskName
//localhost:5002/users/users/tasks/1
http: router.get("/users/tasks/:id", function (req, res, next) {
  db(`SELECT * FROM tasks WHERE id=${req.params.TaskID};`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

// GET one UserName

//http://localhost:5002/users/users/1
router.get("/users/:id", function (req, res, next) {
  db(`SELECT * FROM users WHERE id=${req.params.UserID};`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
