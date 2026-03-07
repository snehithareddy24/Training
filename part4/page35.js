import express from "express";
const app=express();
const Router=express.Router();
Router.get("/products",(req,res)=>{
    res.send("Hello World");
});
app.use("/",Router);
app.listen(5000,()=>console.log("server started"));
