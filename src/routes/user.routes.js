const express=require("express")

const userModel=require("../models/user.model")
const jwt=require("jsonwebtoken")

const app=express.Router()
require("dotenv").config



app.get("/",(req,res)=>{
 
    res.send(users)
})
app.post("/register",async(req,res)=>{
    const {name, email, gender, password}=req.body
  try{
    let newUser =new userModel({name, email, gender, password})
    await newUser.save()
    res.status(200).send(newUser)
  }catch(e){
    res.status(400).send(e.message)
  }

})


app.post("./login",async(req,res)=>{
    const {email, password}=req.body
   try{
   let existingUser= await userModel.findOne({email, password})
   if(existingUser){
    let token=jwt.sign({_id:existingUser._id, email:existingUser.email},process.env.TOKEN)
   res.status(200).send(token)

  

}else{
    res.status(400).send("Invalid Credentials")
}
   }catch(e){
 res.status(400).send(e.message)
   }


})

module.exports=app