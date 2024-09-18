const mongoose=require("mongoose");
const cartItemSchema=new mongoose.Schema({
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cart",
        required:true,
    },
   product:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:true,

    }],
    price:{
         type:Number,
         required:true,
        
    },
   
    discountedPrice:{
        type:Number,
        required:true,
      
    },
    userID:{
        type:mongoose.Schema.ObjectId,
        ref:"USER",
        required:true
     },
})
const CartItem=mongoose.model('cart',cartItemSchema);
module.exports=CartItem;