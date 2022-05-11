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
  database: DB_NAME || "todos",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists Tasks; DROP TABLE if exists Users; CREATE TABLE Tasks(TaskID INT NOT NULL AUTO_INCREMENT, TaskName VARCHAR(40) not null, IsMatched BOOLEAN, PRIMARY KEY (TaskID));CREATE TABLE Users(UserID INT NOT NULL AUTO_INCREMENT, UserName VARCHAR(40) not null, PRIMARY KEY (UserID));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

    console.log("Closing...");
  });

  con.end();

  // let sql =
  //   "DROP TABLE if exists Tasks; DROP TABLE if exists Users; CREATE TABLE Tasks(TaskID INT NOT NULL AUTO_INCREMENT, TaskName VARCHAR(40) not null, IsMatched BOOLEAN, PRIMARY KEY (TaskID));CREATE TABLE Users(UserID INT NOT NULL AUTO_INCREMENT, UserName VARCHAR(40) not null, PRIMARY KEY (UserID), FOREIGN KEY (TaskID) REFERENCES Tasks(TaskID));";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table creation `items` was successful!");

  //   console.log("Closing...");
  // });

  // con.end();

  //  "DROP TABLE if exists items; CREATE TABLE items(id INT NOT NULL AUTO_INCREMENT, text VARCHAR(40) not null, complete BOOLEAN, PRIMARY KEY (id));";
  //  con.query(sql, function (err, result) {
  //    if (err) throw err;
  //    console.log("Table creation `items` was successful!");

  //    console.log("Closing...");
  //  });

  // con.end();
});
