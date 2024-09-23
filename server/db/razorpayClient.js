const Razorpay = require('razorpay');

apiKey="rzp_test_DQRREMey9bTlTT"
apiSecret="gNUN51cilHmSmOOY9w2VbuZh"

const razorpay = new Razorpay({
  key_id: apiKey,
  key_secret: apiSecret,
});

module.exports=razorpay;