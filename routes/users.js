var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// router.get("/", (req, res) => {
//   res.send("Welcome to MatchUp!");
// });

//  GET user list
router.get("/", function (req, res, next) {
  db("SELECT * FROM Users;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

//  GET task list
router.get("/tasks", function (req, res, next) {
  db("SELECT * FROM Tasks;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;

// // GET one student
// router.get("/:id", function (req, res, next) {
//   //your code here
// });

// // INSERT a new student into the DB
// router.post("/", function (req, res, next) {
//   //your code here
// });

// // DELETE a student from the DB
// router.delete("/:id", function (req, res, next) {
//   //your code here
// });

// module.exports = router;
