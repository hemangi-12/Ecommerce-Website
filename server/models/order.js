const mongoose=require('mongoose');
const Address = require('./Address');

const orderSchema=new mongoose.Schema({
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"USER",
       
    },
    orderItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"orderItems",
    }],
    orderDate:{
        type:Date,
        required:true,
        deafult:Date.now()
    },
    deliveryDate:{
        type:Date
    },
    shippingAddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"adresses",
    },
    paymentDetails:{
        paymentMethod:{
            type:String
        },
        transactionId:{
         type:String
        },
        paymentId:{
            type:String
        },
        paymentStatus:{
            type:String,
            default:"PENDING"
        }
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0
   },
   totalItem:{
       type:Number,
       required:true,

   },
   totalDiscountedPrice:{
       type:Number,
       required:true,
     
   },
   discounte:{
       type:Number,
       required:true,
   },
   orderStatus:{
    type:String,
    required:true,
    default:"PENDING"
   },
   totalItem:{
    type:Number,
    required:true

   },
   createdAt:{
    type:Date,
    default:Date.now()
   }
})

orderSchema.methods.createOrder=async function(USER,shippingAddress){
    let address;
    if(shippAddress._id){
        let exitAddress=await Address.findById(shippAddress._id);
        address=exitAddress;
    }else{
        address=new Address(shippingAddress);
        address.USER=USER;
        await address.save();

        USER.addresses.post(address);
        await USER.save();
    }

    const orderItems=[];
    for(const item of carts.cart){
        const orderItem=new orderItems({
            price:item.price,
            product:item.product,
            userID:item.userID,
            discountedPrice:item.discountedPrice
        })


        const createdOrderItem=await orderItem.save();
        orderItems.push(createdOrderItem)
    }
    const createdOrder=new Order({
        USER,
        orderItems,
        totalPrice:cart.totalPrice,
        totalDiscountedPrice:cart.totalDiscountedPrice,
        discounte:cart.discounte,
        totalItem:cart.totalItem,
        shippingAddress:address,

    })

    const savedOrder=await createdOrder.save();
    return savedOrder;
}

orderSchema.methods.placeOrder=async function(orderId){
    const order=await findOrderById(orderId);

    order.orderStatus="PLACED";
    order.paymentDetails.status="COMPLETED";

    return await order.save();
}

orderSchema.methods.confiremdOrder=async function(orderId){
    const order=await findOrderById(orderId);

    order.orderStatus="CONFIRMED";
    

    return await order.save();
}
orderSchema.methods.shipOrder=async function(orderId){
    const order=await findOrderById(orderId);

    order.orderStatus="SHIPPED";
    

    return await order.save();
}
orderSchema.methods.deliverOrder=async function(orderId){
    const order=await findOrderById(orderId);

    order.orderStatus="DELIVERED";
    

    return await order.save();
}
orderSchema.methods.cancelledOrder=async function(orderId){
    const order=await findOrderById(orderId);

    order.orderStatus="CANCELLED";
    

    return await order.save();
}

orderSchema.methods.findOrderById=async function(orderId){
    const order=await Order.findById(orderId)
    .populate("USER")
    .populate({path:"orderItems",populate:{path:"product"}})
    .populate("shippingAddress")

    return order
}

orderSchema.methods.usersOrderHistory=async function(userID){
    try{
        const orders=await Order.find({user:userID,orderStatus:"PLACED"})
        .populate({path:"orderItems",populate:{path:"product"}}).lean()
        return orders

    }catch(error){
        throw new Error(error.message)

    }
}

orderSchema.methods.getAllOrders=async function(){
    return await Order.find()
    .populate({path:"orderItems",populate:{path:"product"}}).lean()
}
orderSchema.methods.deleteOrder=async function(orderId){
    const order=await findOrderById(orderId);
    await Order.findByIdDelete(order._id)
}
const Order=mongoose.model('orders',orderSchema);
module.exports=Order;