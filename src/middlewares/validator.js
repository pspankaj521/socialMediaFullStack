const jwt=require("jsonwebtoken")

const validator=(req,res,next)=>{
const {token}=req.headers;
try{
let verify=jwt.verify(token, process.env.TOKEN)

if(verify){
    req.userDetails=verify;
    next()

}else{
    res.status(401).send("Unauthorised")
}
}catch(e){
res.status(403).send(e.message)
}


}
module.exports=validator