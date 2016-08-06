require('dotenv').config();

const connection = require('./config/db');

connection.query('drop table potato', err => {
  if(err) throw err;

  console.log('done!')

  connection.end();
})

