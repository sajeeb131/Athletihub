require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

//routes 
const userRoutes = require('./routes/user-routes')
const homeRoutes = require('./routes/home-routes')
const profileRoutes = require('./routes/profile-routes')

//express app
const app = express()

//middleware
app.use(express.json())

app.use('/user',userRoutes)

app.use('/home',homeRoutes)

app.use('/profile',profileRoutes)

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