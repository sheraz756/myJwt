const express = require('express')
const app = express()
require('dotenv').config({path:'./.env'})
const connect = require('./config/db')
const port = process.env.PORT || 4000;
const UserRoutes = require('./routes/userRoutes')
connect()
app.use(express.json())

app.use('/api',UserRoutes)
app.listen(port,()=>{
    console.log(`server running ${port}`)
})