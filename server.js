const http = require('http')
const express = require('express')


// @DESC  Creating a Server

const app = express()
const server = http.createServer(app)

//@DESC  ?Start the Server

const PORT = process.env.PORT || 3080
server.listen(PORT,console.log(`Server is Running Successfully on Port ${PORT}`))