const express= require('express');
const mongoose= require('mongoose');

const cors = require('cors');
const bodyParser = require('body-parser');



// Rest of your server configuration and routes

const app=express();
app.use(cors());
app.use(bodyParser.json());
const port=3000;
require('dotenv').config();
const url=process.env.MONGO_URI

mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

const schtroumpfrouter= require("./routes/schtroumpf");
app.use('/api/schtroumpf',schtroumpfrouter)



app.listen(port, () =>{
    console.log('Server started');
})
