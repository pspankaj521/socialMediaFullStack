const {Schema, model}=require("mongoose")

const userSchema= new Schema({
    name : {type:String, required:true},
email :  {type:String, required:true, unique:true},
gender :  {type:String, enum:["male","female","others"] ,required:true},
password :  {type:String, required:true}
},{
    versionKey:false,
})

const userModel= model("user",userSchema)

module.exports=userModel