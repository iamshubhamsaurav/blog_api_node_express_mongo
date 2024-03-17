const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')

const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'})

const categoryRoute = require('./routes/category')

connectDB()

const app = express()

app.use(express.json())

app.use('/api/v1/categories', categoryRoute)

app.all('*', (req, res) => {
    res.status(200).json({
        success: false,
        message: '404! Page Not Found'
    })
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Connected to server on port: ${PORT}`.green)
})