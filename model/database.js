require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  port: "52000",
  password: DB_PASS,
  database: DB_NAME || "matchup",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = `DROP TABLE if exists tasks; 
    DROP TABLE if exists users;
    CREATE TABLE tasks(id INT NOT NULL AUTO_INCREMENT, task_name VARCHAR(40) not null, PRIMARY KEY (id));
    CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT, user_name VARCHAR(40) not null, task_id INT NOT NULL, PRIMARY KEY (id));`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `users, tasks` was successful!");

    console.log("Closing...");
  });

  con.end();
});
