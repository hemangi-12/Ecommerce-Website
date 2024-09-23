const mongoose=require("mongoose");


const AddressSchema=new mongoose.Schema({
     fname:{
        type:String,
        required:true,
     },
     lname:{
        type:String,
        required:true,
     },
     streetAddress:{
        type:String,
        required:true,
     },
     city:{
        type:String,
        required:true,
     },
     state:{
        type:String,
        required:true,
     },
     zipCode:{
        type:Number,
        required:true,
     },
     userID:{
        type:mongoose.Schema.ObjectId,
        ref:"USER"
     },
     mobile:{
        type:String,
        required:true,
     }
     

})

const Address=mongoose.model("addresses",AddressSchema);
module.exports=Address