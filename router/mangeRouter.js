const express = require('express');
const mangaRouter = express.Router();
const method = require('../until/help')
const manga = [
   {
      id: 1,
      name: 'Bay vien ngoc rong',
   },
   {
      id: 2,
      name: 'Doremon',
   },
   {
      id: 3,
      name: 'Pikachu',
   },
];
method.data = manga
mangaRouter.get('/', method.get)
mangaRouter.post('/', method.post)
mangaRouter.put('/', method.put)
mangaRouter.delete('/', method.delete)
module.exports = mangaRouter
