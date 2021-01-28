const { SERVER } = process.env

const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({ message: `This request has been redirected from ${SERVER}` })
}) 

app.listen(4000, () => console.log(`Server ${SERVER } running...`))