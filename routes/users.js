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

router.put("/updateMatch", (req, res) => {
  //variable names need to match front end
  const task_id = req.body.task_id;
  const user_id = req.body.user_id;
  const user_id2 = req.body.user_id2;
  console.log(req.body);
  db(
    `UPDATE users SET task_id = ${task_id}  WHERE id = ${user_id} OR id = ${user_id2};`
  ).then(() => {
    db(`SELECT group_concat(users.user_name separator ' and ') as users, 
        tasks.task_name 
        FROM users
        INNER JOIN tasks ON tasks.id = users.task_id
        WHERE users.task_id is not null
       GROUP BY task_name;`)
      .then((results) => {
        res.send(results.data);
      })
      .catch((err) => res.status(500).send(err));
  });
});

module.exports = router;
