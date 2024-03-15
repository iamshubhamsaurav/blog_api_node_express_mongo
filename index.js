const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')

dotenv.config({path: './config/config.env'})

const app = express()

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