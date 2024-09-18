const mongoose=require("mongoose");

const eproductsSchema = new mongoose.Schema({
    id:String,
    name:String,
    price:Object,
   quantity:Object,
   imageUrl:String,
});


const Eproducts = new mongoose.model("eproducts",eproductsSchema);

module.exports = Eproducts;