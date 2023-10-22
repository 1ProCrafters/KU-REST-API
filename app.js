
import express from "express";
import { resolve } from 'path';
// import storage from './src/modules/storage.js';
// storage.initStorage();

var app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.sendFile(resolve('./src/index.html'))
});

app.get('/template', function (req, res) {
  res.render('template');
});

app.listen(3000);
