const express = require('express');
const mangaRouter = express.Router();
const method = require('../utils/index')
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
mangaRouter.get('/', method.get(manga))
mangaRouter.post('/', method.post(manga))
mangaRouter.put('/', method.put(manga))
mangaRouter.delete('/', method.delete(manga))
module.exports = mangaRouter
