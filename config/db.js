const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',   // url of database
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'testdb'
});

connection.connect();

module.exports = connection;
