const mysql = require("mysql");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
});

con.connect(function () {
  console.log("Connected to the database");
});

con.query("CREATE DATABASE node;", function (error, results, fields) {
  if (error) throw error;
  console.log(results, fields);
});
