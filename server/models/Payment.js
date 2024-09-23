const mongoose=require("mongoose");

const paymentSchema = new mongoose.Schema({
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    paymentId: {
      type: String,
      required: true,
      unique: true,
    },
    signature: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'successful', 'failed'],
      default: 'pending',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'USER',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: 'INR',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

 const Payment = mongoose.model('Payment',paymentSchema);
 module.exports=Payment