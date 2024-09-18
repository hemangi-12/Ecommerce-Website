const mongoose=require('mongoose');

const orderItemSchema=new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:true
       
    },
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

const OrderItem=mongoose.model('orders',orderItemSchema);
module.exports=OrderItem;