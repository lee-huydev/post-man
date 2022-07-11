const express = require('express');
const usersRouter = express.Router();
const method = require('../until/help')
const users = [
    {
       id: 1,
       name: 'Le Quoc Huy',
    },
    {
       id: 2,
       name: 'Pham Ngoc Anh',
    },
    {
       id: 3,
       name: 'Pham Van Hien',
    },
 ];

method.data = users
usersRouter.get('/', method.get)
usersRouter.post('/', method.post)
usersRouter.put('/', method.put)
usersRouter.delete('/', method.delete)
module.exports = usersRouter