
const uuid = require('uuid');
const squel = require('squel').useFlavour('mysql');
const connection = require('../config/db');

//  the last argument is the callback
//  the first argument OF the callback, is an error

connection.query(`create table if not exists potato (
    id varchar(100),
    style varchar(100),
    quantity int
  )`, err => {
    if(err) console.log(err);
  });

exports.getAll = function() {
  return new Promise((resolve, reject) => {

    let sql = squel.select().from('potato').toString();

    connection.query(sql, (err, potatoes) => {
      if(err) {
        reject(err);
      } else {
        resolve(potatoes);
      }
    });
  });
};

exports.create = function(newPotato) {
  return new Promise((resolve, reject) => {
    let sql = squel.insert()
                   .into('potato')
                   .setFields(newPotato)
                   .set('id', uuid())
                   .toString();

    connection.query(sql, err => {
      if(err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};



//////////////////
// out of context (app.js)

// const Potato = require('models/potato')

// Potato.getAll()
//   .then(potatoes => {

//   })
//   .catch(err => {

//   })


// Potato = potato model
// potato = one single potato
// potatos = an array of potatoes


