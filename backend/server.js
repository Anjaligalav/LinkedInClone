import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";
import { v2 as cloudinary } from 'cloudinary'; 

dotenv.config();

// Add this Cloudinary configuration
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const app = express();

app.use(cors());

app.use(express.json());

app.use(postRoutes);
app.use(userRoutes);

// app.use(express.static("uploads"));

const start = async() =>{
    const connectDB = await mongoose.connect("mongodb+srv://anjaligalav294:4EvWfnagCmYCVuKZ@apnaproconnect.h8tsp6g.mongodb.net/?retryWrites=true&w=majority&appName=apnaproconnect")
    app.listen(9090 ,()=>{
        console.log("Mongodb Connect")
        console.log("server is running on port 9090")
    })
}

start();