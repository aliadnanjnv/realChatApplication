import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user_route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
// dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// const PORT = process.env.PORT;
// const URI = process.env.MONGODB_URL;

const PORT = 4001;

try{
    mongoose.connect("mongodb+srv://aliadnanjnv00786:zMk6FlkNg8F3l7Ux@cluster0.chbgnvw.mongodb.net/CHATAPP-using-MERN?retryWrites=true&w=majority&appName=Cluster0");
    console.log("mongoDB Connected");
}
catch(error){
    console.log(error);
}

app.use("/api/user",userRouter);

app.get('/first',(req,res)=>{
    res.send('hello word');
})

app.listen(PORT,()=>{
    console.log(`the server is listening at the port ${PORT}`);
})