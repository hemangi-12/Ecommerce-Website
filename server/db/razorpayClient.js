const Razorpay = require('razorpay');

apiKey="rzp_test_D9E13E1fhzFmjr"
apiSecret="PtymOR886VQ83jYdTtTJpIDz"

const razorpay = new Razorpay({
  key_id: apiKey,
  key_secret: apiSecret,
});

module.exports=razorpay;