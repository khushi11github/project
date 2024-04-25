import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors"
// import { sample_foods, sample_users } from "./data";
// import jwt from "jsonwebtoken";
import foodRouter from "./routes/food.router";

import userRouter from "./routes/user.router"
import { sample_users } from "./data";
import{dbConnect} from './routes/configs/database.config';
const app =express();
dbConnect();

 const corsOptions = {
     origin: ["http://localhost:4200", "http://localhost:5000"]
 }

// const corsOptions = {
//     origin: ["http://localhost:4200"]
// }


//  app.use(cors({
//      credentials:true,
//      origin: [“http://localhost:4200", “http://localhost:5000”],

// }));
 app.use(cors(corsOptions));
// app.use(cors({
//     origin: ["http://localhost:4200", "http://localhost:5000"],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization']
//   }))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.get("/api/foods",(req,res)=>{
//     res.send(sample_foods);
  
// })
// app.get("/api/foods/search/:searchTerm",(req,res)=>{
//     const searchTerm = req.params.searchTerm;
//     const foods = sample_foods.filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()));
//     res.send(foods);
// })
// app.get("/api/foods/:id",(req,res)=>{
//     const foodId =req.params.id ;
//      const food = sample_foods.find(food=>food.id == foodId);
//      res.send(food);
// })

// app.post("/api/users/login",(req,res)=>{
   
//   let {email,password} = req.body;
    
//     const user = sample_users.find(user => user.email === email && user.password === password);
//     if(user){
//         res.send(generateTokenResponse(user));
//     }else{
//         res.status(400).send("username and password is not found")
//     }

// });
app.use("/api/foods",foodRouter);
app.use("/api/users",userRouter)

// app.post("/api/users/login",(req,res)=>{
//     let { email, password } = req.body;
//    // email = email.trim().toUpperrCase(); // Trim whitespace and convert to lowercase
//    //console.log("Received email:", email, "Length:", email.length);
//    console.log("Received email:", email, "Length:", email ? email.length : "N/A");
 
//    console.log("Received password:", password, "Length:", password.length);
    
//     const user = sample_users.find(user => {
//         console.log("User email:", user.email);
//         return user.email === email && user.password === password;
//     });
//     console.log("User found:", user);

//     if(user){
//         res.send(generateTokenResponse(user));
//     }else{
//         res.status(400).send("Username and password not found");
//     }
// });






// const generateTokenResponse=(user:any)=>{
//  const token = jwt.sign({
//     email:user.email,
//     isAdmin:user.isAdmin 
//  },"secret",{
//     expiresIn:"30d"
//  });
//  user.token = token;
//  return user;
// }
// Error handling middleware
// Error handling middleware

  




const port =5000;
app.listen(port,()=>{
    console.log("website http://localhost:/");
})

