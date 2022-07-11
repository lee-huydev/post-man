const express = require('express')  
const app = express()
const mangaRouter = require('./router/mangeRouter')
const usersRouter = require('./router/usersRouter')
const port = 5000

app.use(express.json())
app.use("/api/manga", mangaRouter)
app.use("/api/users", usersRouter)
app.listen(port, () => console.log("Server running at https://localhost:5000"))