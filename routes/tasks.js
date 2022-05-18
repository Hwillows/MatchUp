var express = require("express");
var router = express.Router();
const db = require("../model/helper");

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
