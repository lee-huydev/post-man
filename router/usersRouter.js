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


usersRouter.get('/', method.get(users))
usersRouter.post('/', method.post(users))
usersRouter.put('/', method.put(users))
usersRouter.delete('/', method.delete(users))
module.exports = usersRouter