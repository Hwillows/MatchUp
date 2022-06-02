require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  // port: "52000",
  password: DB_PASS,
  database: DB_NAME || "matchup",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = ` 
  DROP TABLE if exists users;
  CREATE TABLE users(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, user_name VARCHAR(40), email VARCHAR(255), task varchar(255));
  INSERT INTO users VALUES 
  (1,'Hannah','hannah.willows@hotmail.co.uk','Chess'),
    (2,'Ellie','hannah.willows@hotmail.co.uk','Tennis'),
    (3,'Max','hannah.willows@hotmail.co.uk','Ping Pong');
  `;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `users, tasks` was successful!");

    console.log("Closing...");
  });

  con.end();
});
