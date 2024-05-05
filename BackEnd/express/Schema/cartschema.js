const {Schema,model}= require("mongoose");

const cartitem= new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    cartitem:[{
        type:Schema.Types.Mixed,
        required:true
    }]
})

const cart= new model("cart-item",cartitem);
module.exports= cart;