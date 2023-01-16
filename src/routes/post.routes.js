const express=require("express")
const userModel=require("../models/user.model")
const validator=require("../middlewares/validator")
const postModel=require("../models/post.models")

const app=express.Router()

app.use(validator)

app.get("/",async(req,res)=>{
    let {_id}=req.userDetails;
    let data=await postModel.find({user:_id}).populate("user").then(r=>r)
    res.send(data)
})

app.post("/", async(req, res)=>{
    const{user, title,body, device}=req.body
    try{
     let newPost= new postModel({user, title,body, device})
     await newPost.save()
     res.status(201).send(newPost)



    }catch(e){
       res.status(400).send(e.message)
    }
})

app.patch("/update/:id",async(req,res)=>{
    const {id}=req.params
    const {body}=req.body
  try{
    await postModel.findByIdAndUpdate(id,{$set:{body}});
    res.status(200).send("updated")
  }catch(e){
  res.status(400).send(e.message)
  }



})

app.delete("/delete/:id", async(req,res)=>{
    let {id}=req.params;
    try{
     await postModel.findByIdAndDelete(id)
     res.status(200).send("deleted")
    }catch(e){
     res.status(400).send(e.message)
    }
})

module.exports=app