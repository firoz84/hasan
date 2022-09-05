
const { bgGreen } = require('colors');
const express = require('express');


const app=express();

app.use('/api/students', require('./routes/student'))

app.listen(5050, ()=>{

    console.log(`this server is running on port 5050`);
})