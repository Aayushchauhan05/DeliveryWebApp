const {Schema,model}=require("mongoose");
const user= new Schema({
 username:{
    require:true,
type:String
 },
 phone:{
    require:true,
type:String,
min:10,
max:10
 },
 email:{
    require:true,
type:String
 },
 password:{
    require:true,
type:String,
min:5
 },
})

const register= new model("user",user)
module.exports={register};