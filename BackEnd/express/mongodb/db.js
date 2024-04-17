const mongoose=require("mongoose");
const uri="mongodb+srv://ayushchauhan0508:ayush0508@data.ba9vlri.mongodb.net/?retryWrites=true&w=majority&appName=data";

const connectdb= async()=>{
    try {
        await mongoose.connect(uri);
        console.log("database is connected");
    } catch (error) {
        console.log("error in database",error);
    }
  
}
module.exports = connectdb;