const cart = require("../Schema/cartschema");

const cartitemset=async (req,res)=>{
    const email= req.user.userexist.email;
    const username=req.user.userexist.username;
    const{items}=req.body;
try {
    const userexist= await cart.findOne({email});
    if (!userexist) {
        const createcart= await cart.create({username,email,cartitem:items});
        return res.status(200).json({createcart});
    }
    const updatecart= await cart.findOneAndUpdate({email},{$push:{cartitem:items}},)
    return res.status(200).json({updatecart});
} catch (error) {
    console.log(error);
    return res.status(500)
}
}

const send_cart_item= async(req,res)=>{
    try {
        
const email= req.user.userexist.email;
const find_user= await cart.findOne({email});
if (!find_user) {
    return  res.status(400).send("Cart not found for this user");

}
return res.status(200).json({find_user});

    } catch (error) {
        console.log(error,"in cart fetching")
    }
}
module.exports={cartitemset,send_cart_item};