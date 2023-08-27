require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//routes 
const userRoutes = require('./routes/user-routes')
const homeRoutes = require('./routes/home-routes')
const profileRoutes = require('./routes/profile-routes')
const marketRoutes = require('./routes/market-route')
const groundRoutes = require('./routes/grounds-routes')
const tournaments = require('./routes/tournaments-route')
// const esports = require('./routes/esports-route')
//express app
const app = express()

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

//middleware
app.use(express.json())


//main routes
app.use('/user',userRoutes)
app.use('/home',homeRoutes)
app.use('/profile',profileRoutes)
app.use('/market',marketRoutes)
app.use('/ground',groundRoutes)
app.use('/tournaments', tournaments)
// app.use('/esports', esports)

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