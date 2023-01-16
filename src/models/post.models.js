const {Schema, model}=require("mongoose")

const postSchema=new Schema({
    user:{type:Schema.Types.ObjectId, ref:"user"},
    title:{type:String, required:true},
    body:{type:String, required:true},
    device:{type:String, required:true, enum:["PC","TABLET","MOBILE"]},
},{
    versionKey:false,
})
const postModel=model("post",postSchema)

module.exports=postModel