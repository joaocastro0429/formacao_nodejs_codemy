
const express =require('express')
const app= express()
app.use(express.json())


require('./routes/route')(app)



module.exports=app