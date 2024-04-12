const{register}=require("../Schema/userschema")
const bcrypt=require("bcrypt");
var jwt = require('jsonwebtoken');
const registeruser = async (req, res) => {
    const { username, phone, email, password } = req.body;
    try {
       
        if (typeof phone != "string") {
            return res.status(500).send("enter valid data");
        }
        else if (typeof username != "string") {
            return res.status(500).send("enter valid data");
        }
        else if (password.length < 4) {
            return res.status(500).send("enter valid data");
        }

const userexist = await register.findOne({email});
if (!userexist) {
const hashapassword= await bcrypt.hash(password,10)
    const usercreated= await register.create({ username, phone, email, password:hashapassword})
    return res.status(201).json({usercreated});
}

return res.status(404).send("user already exist");
    } catch (error) {
console.log(error);
    }

}

const login= async(req,res)=>{
const{email,password}=req.body;
try {
    const userexist= await register.findOne({email});
    if (!userexist) {
        return res.status(404).send("user doesn't exist");

    }
    const validuser=bcrypt.compare(password,userexist.password);
    if (!validuser) {
        return res.status(501).send("Invalid password")
    }

    const token= jwt.sign({email},"ayuhwebdev",{expiresIn:"10d"});
    return res.status(200).json({
        userexist,
        token
    })
    

} catch (error) {
    
}
}
module.exports={registeruser,login}