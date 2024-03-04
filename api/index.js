import express from "express";
import mongoose from "mongoose";
import dotenv from  "dotenv";
dotenv.config();
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

mongoose
  .connect(process.env.mongo)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const app = express(); 
app.use(express.json());
const port = 3000; 

app.listen(port, () => {
   console.log(`http://localhost:${port}/`);
});


app.use("/api/user",userRouter); 
app.use("/api/auth",authRouter); 

app.use((err,req,res,next)=>{
   const statusCode=err.statusCode||500;
   const message=err.message||'internal server error';
})