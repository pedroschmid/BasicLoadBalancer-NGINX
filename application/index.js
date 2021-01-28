// const { SERVER } = process.env

// const express = require('express')
// const morgan = require('morgan')

// const app = express()

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(morgan('dev'))

// app.get('/', (req, res) => {
//     res.json({ message: `This request has been redirected from ${SERVER}` })
// }) 

// app.listen(8080, () => console.log(`Server ${SERVER } running...`))

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`<h1>Node Instance : ${process.env.MESSAGE}</h1>`);
}).listen(8080);
