const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({ message: `This request has been redirected from server ${parseInt(Math.random() * (5 - 1) + 1)}` })
}) 

app.listen(5000, () => console.log(`Server running...`))