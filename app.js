require('dotenv').config();

const PORT = process.env.PORT || 8000;

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Potato = require('./models/potato');

const app = express();

app.set('view engine', 'ejs');
// app.set('views', './views');

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/potatoes', (req, res) => {
  Potato.getAll()
    .then(potatoes => {
      res.send(potatoes);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.post('/potatoes', (req, res) => {
  Potato.create(req.body)
    .then(() => {
      res.send();
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.listen(PORT, err => {
  console.log(err || `Express listening on port ${PORT}`);
});
