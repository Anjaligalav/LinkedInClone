import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(postRoutes);
app.use(userRoutes);

app.use(express.static("uploads"));

const start = async() =>{
    const connectDB = await mongoose.connect("mongodb+srv://anjaligalav294:4EvWfnagCmYCVuKZ@apnaproconnect.h8tsp6g.mongodb.net/?retryWrites=true&w=majority&appName=apnaproconnect")
    app.listen(9090 ,()=>{
        console.log("Mongodb Connect")
        console.log("server is running on port 9090")
    })
}

start();