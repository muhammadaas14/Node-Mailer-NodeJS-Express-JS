const express = require('express')
const app = express();
const env = require('dotenv');
const sendMail = require('./controllers/sendemail');
let PORT = 8080;
require('./controllers/sendemail')

app.get('/',(req,res)=>{
    res.send('hello from tc')
})
app.get('/sendEmail',sendMail)


app.listen(PORT,(req,res)=>{
    console.log(`server is runnning on ${PORT} `)
})