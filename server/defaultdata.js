const Products = require("./models/productsSchema");
const productsdata = require("./constant/productsdata");
const Eproducts=require("./models/eproductsSchema");
const eproductsdata=require("./constant/eproductsdata");

const DefaultData = async()=>{
    try {
       await Products.deleteMany({});
       await Eproducts.deleteMany({});
       
        const storeData = await Products.insertMany(productsdata);
        const estoreData = await Eproducts.insertMany(eproductsdata);
        console.log(storeData);
        console.log(estoreData);
    } catch (error) {
        console.log("error" + error.message);
    }
};

module.exports = DefaultData;