const express =require("express")
const conncetDB =require("./config/connectDB")
const cors=require("cors")
const userRouter=require("./routes/user.routes")
const postRouter=require("./routes/post.routes")
const userModel= require("./models/user.model")

require("dotenv").config()

const app=express()
app.use(express.json())
app.use(cors())
app.use("/users", userRouter)
app.use("/posts",postRouter)


app.get("/",async(req,res)=>{
    const users= await userModel.find()
    res.send(users)
})

app.listen(process.env.PORT, async()=>{
    await conncetDB()
    console.log(`http://localhost:${process.env.PORT}`)
})