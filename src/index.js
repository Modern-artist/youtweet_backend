import 'dotenv/config'
import mongoose from "mongoose";

import express from "express";
import connectDB from './db/index.js';
const app = express(); 



connectDB();

// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}`)
//         app.on("error",(error)=>{
//             console.log("Error app:",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log("app is listning on port", process.env.PORT);
//         })
//     } catch (error) {
//         console.log("error : ",error)
//     }
// })