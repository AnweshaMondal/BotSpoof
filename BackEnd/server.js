//import express object 
// const express = require('express'); 
//in package.json the type is written as module , so use ES6 import syntax

import express from 'express';
import db from './dbConnection.js'
import chatBotRoute from './routes/chatbot.routes.js';
import cors from 'cors';
const app = express();

const port = process.env.PORT||7001;//adds all contansts of .env file to global process object

//middleware
app.use(express.json());// to parse the json body
app.use(cors({
  origin: "http://localhost:5173", // your React app
  methods: ["GET", "POST"]
}));//telling backend that front-end who is running on a different port has the accesss to access the backend code , running on port 5000 

//Defining Routes
app.use("/bot/v1/",chatBotRoute)
app.get('/', (req, resp)=>{
    resp.send("Hi from the backend");
})

app.listen(port, ()=>{  //start the server
   console.log(`Server is listening on port ${port}`);
})