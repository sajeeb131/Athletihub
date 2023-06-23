require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const userRoutes = require('./routes/user-routes')
const homeRoutes = require('./routes/home-routes')
//express app
const app = express()

//middleware
app.use(express.json())

app.use('/user',userRoutes)

app.use('/home',homeRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        //listen for requests
        app.listen(process.env.PORT, ()=>{
            console.log('connected to db & listening on port', process.env.PORT)
        })

    })
    .catch(err=>{
        console.log(err)
    })