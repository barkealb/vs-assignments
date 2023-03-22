const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt } = require('express-jwt')

//Middleware 

app.use(express.json())
app.use(morgan('dev'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))


//Routers

app.use('/auth', require('./routes/authRouter'))
app.use('/api/issues', require('./routes/issuesRouter'))


//Connect DB

mongoose.connect('mongodb+srv://barkeal:cwaRFV9dA5iev62H@cluster0.uwng6zw.mongodb.net/?retryWrites=true&w=majority', 
    console.log('Connected to DB'))


//Error Handler

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === 'UnauthorizedError') return res.status(err.status)
    return res.send({errMsg: err.message})
})


//Start Listener

app.listen(9000, () => {
    console.log('Server is listening on Port 9000')
})