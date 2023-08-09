const http = require('http')
const express = require('express')


//!Server

const app = express()
const server = http.createServer(app)

//?Start the Server

const PORT = process.env.PORT || 3080
server.listen(PORT,console.log(`Server is Running Successfully on Port ${PORT}`))