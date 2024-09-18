const mongoose=require("mongoose");

const paymentSchema = new mongoose.Schema({
    orderDate:{type:Date,default:Date.now},
    payStatus:{type:String}
},{strict:false})

paymentSchema.methods.createPaymentLink = async function(orderId) {
    try {
        const order = await orderService.findOrderById(orderId);

        const paymentLinkRequest = {
            amount: order.totalPrice * 100,
            currency: "INR",
            customer: {
                name: order.USER.firstName + " " + order.USER.lastName,
                contact: order.USER.mobile,
                email: order.USER.email
            },
            notify: {
                sms: true,
                email: true
            },
            remainder_enable: true,
            callback_url: `http://localhost:3000/payment/${orderId}`,
            callback_method: 'get'
        };

        const paymentLink = await razorpay.paymentLink.create(paymentLinkRequest);

        const paymentLinkId = paymentLink.id;
        const payment_link_url = paymentLink.short_url;

        const resData = {
            paymentLinkId,
            payment_link_url
        };

        return resData;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};
paymentSchema.methods.updatePaymentInformation = async function(paymentId, orderId) {
    try {
        const Order = await orderService.findOrderById(orderId);

        const payment = await razorpay.payments.fetch(paymentId);

        if (payment.status === "captured") {
            Order.paymentDetails.paymentId = paymentId;
            Order.paymentDetails.status = "COMPLETED";
            Order.orderStatus = "PLACED";

            await Order.save();
        }

        const resData = { message: "Your Order is placed", success: true };

        return resData;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};



 const Payment = mongoose.model('Payment',paymentSchema);
 module.exports=Payment