import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI,{useNewUrlParser:true, useUnifiedTopology:true}, 
);

//connection Object
const db = mongoose.connection;
//chck the connection status
db.on('connected',()=>{console.log("MongoDB Connected.")})
db.on('disconnected',()=>{console.log("MongoDB Connected.")})
db.on('error',()=>{console.log("error"+error)});

// module.exports = db;--> this is normal js syntax
export default db;//this is ES6 Module style

//2nd syntax of connection
// mongoose.connect(process.env.MONGO_URI)
// .then(()=>{
//     console.log("Connected to MongoDB");
// })
// .catch((error)=>{
//     console.log("Error connecting to MongoDB.");
// })