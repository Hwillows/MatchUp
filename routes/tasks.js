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

// This temporary table shows the names and the tasks they're matched to.
// router.get(
//   "/showTasks",
//   function (req, res, next) {
//     db(
//       // `SELECT users.user_name, tasks.task_name FROM users INNER JOIN tasks ON users.task_id = tasks.id;`
//       `SELECT group_concat(users.user_name separator ' and ') as users,
//       tasks.task_name FROM users INNER JOIN tasks ON tasks.id = users.task_id WHERE users.task_id is not null GROUP BY task_name;`
//     )
//       .then((results) => {
//         res.send(results.data);
//       })
//       .catch((err) => res.status(500).send(err));
//   }
//   /* RESULTS LOOK LIKE
//  * {
//         "group_concat(users.user_name separator ',')": "Deb,Joseph",
//         "task_name": "Explore Barcelona"
//     }

// */
// );

module.exports = router;
