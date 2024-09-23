const express=require("express");
const jwt = require("jsonwebtoken");
const router = new express.Router();
const Products = require("../models/productsSchema");
const Eproducts=require("../models/eproductsSchema");
const USER = require("../models/userSchema");
const Order=require("../models/order.js")
const Payment=require("../models/Payment.js")
const bcrypt=require("bcryptjs");
const authenicate=require("../middleware/authenticate");
const Address=require("../models/Address.js")
const razorpay=require("../db/razorpayClient.js")
const crypto = require('crypto');
const apiKey=process.env.RAZORPAY_KEY_ID





//get productsdata api
router.get("/getproducts", async(req, res) => {
    try {
        const productsdata = await Products.find();
        console.log("data mila hain" +productsdata );
        res.status(201).json(productsdata);
       
    } catch (error) {
        console.log("error" + error.message);
    }
});
//get eproductsdata api
router.get("/geteproducts", async(req, res) => {
    try {
        const eproductsdata = await Eproducts.find();
        console.log("data mila hain" +eproductsdata );
        res.status(201).json(eproductsdata);
       
    } catch (error) {
        console.log("error" + error.message);
    }
});
//get individual data
router.get("/getproductsone/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        //console.log(id);
        const individuadata= await Products.findOne({id:id});
       // console.log(individuadata +"individuald data");
       res.status(201).json(individuadata);
    } catch (error) {
        res.status(400).json(individuadata);
        console.log("error" + error.message);
        
    }
});





// register the data
router.post("/register", async (req, res) => {
    //console.log(req.body);
    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "fill all the details" });
        console.log("no data avilable");
    };

    try {

        const preuser = await USER.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This email is already exist" });
        } else if (password !== cpassword) {
            res.status(422).json({ error: "password are not matching" });;
        } else {
            

            const finalUser = new USER({
                fname, email, mobile, password, cpassword
            });
               //password hashing process
            
            const storedata = await finalUser.save();
             console.log(storedata + "user successfully added");
            res.status(201).json(storedata);
        }

    } catch (error) {
        //console.log("error the bhai catch ma for registratoin time" + error.message);
        //res.status(422).send(error);
    }

});


//Login user api

router.post("/login", async (req, res) => {
    //console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "fill the details" })
    };
    
    try {

        const userlogin = await USER.findOne({ email: email });
          console.log(userlogin +"user value");
       
          if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            console.log(isMatch +"pass match");

            //token generate
            const token = await userlogin.generateAuthtoken();
               // console.log(token);

               res.cookie("Amazonclone", token, {
                expires: new Date(Date.now() + 900000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Password" })
            } else {
                res.status(201).json(userlogin);
            }

        }  else {
            res.status(400).json({ error: "user not exist" });
        }

    } catch (error) {
        res.status(400).json({ error: "invalid details" });
    }
})

//adding the data to cart
router.post("/addcart/:id", authenicate, async (req, res) => {

    try {
        const { id } = req.params;
        const cart = await Products.findOne({ id: id });
        console.log(cart + "cart value");

        const UserContact = await USER.findOne({ _id: req.userID });
        console.log(UserContact);


        if (UserContact) {
            const cartData = await UserContact.addcartdata(cart);

            await UserContact.save();
            console.log(cartData);
            res.status(201).json(UserContact);
        }else{
            res.status(401).json({error :"Invalid user"}); 
        }
    } catch (error) {
        res.status(401).json({error :"Invalid user"});
       
    }
});

//get cart details
router.get("/cartdetails", authenicate, async (req, res) => {
    try {
        const buyuser = await USER.findOne({ _id: req.userID });
        //console.log(buyuser + "user hain buy pr");
        res.status(201).json(buyuser);
    } catch (error) {
        console.log("error" +error );
    }
});

//get valid user
router.get("/validuser", authenicate, async (req, res) => {
    try {
        const validuserone = await USER.findOne({ _id: req.userID });
        //console.log(validuserone + "user hain home k header main pr");
        res.status(201).json(validuserone);
    } catch (error) {
        console.log("error" +error );
    }
});

//remove item from cart
router.delete("/remove/:id", authenicate, async (req, res) => {
    try {
        const { id } = req.params;

        req.rootUser.carts = req.rootUser.carts.filter((cruval) => {
            return cruval.id != id;
        });

        req.rootUser.save();
        res.status(201).json(req.rootUser);
        console.log("iteam remove");

    } catch (error) {
        console.log("error" + error);
        res.status(400).json(error);
    }
});

//add shipping Address
router.post("/addAddress",authenicate, async (req, res) => {
    const { fname,lname,streetAddress, city, state, zipCode, mobile } = req.body;
    let userID = req.USER;
    let userAddress = await Address.create({
      userID,
      fname,
      lname,
      streetAddress,
      city,
      state,
      zipCode,
      mobile,
    });
    res.json({ message: "Address added", userAddress,success:true });
});
//get shipping address
/*router.get("/getAddress", async (req,res)=>{
    let address = await Address.find({userID:req.USER}).sort({createdAt:-1})
    res.json({message:'address', userAddress:address[0]})
})*/

//Create order
router.post("/orders",authenicate,async(req,res)=>{
    const user=req.USER;

    try{
        const createdOrder = await Order.createOrder(user,req.body)
        return res.status(201).send(createdOrder)

    }catch(error){
        return res.status(400).send({error:error.message})

    }
})

//order api
router.post("/buy/payments", authenicate, async (req, res) => {
    try {
      const { amount, currency } = req.body;  // Expect the amount and currency from the frontend
  
      // Prepare the Razorpay order request
      const options = {
        amount: amount * 100,  // Convert to paise (smallest currency unit)
        currency: currency || 'INR',
        receipt: `receipt_${Date.now()}`,  // Unique receipt ID
      };
  
      // Create order using Razorpay SDK
      const order = await razorpay.orders.create(options);
  
      if (!order) return res.status(500).send('Unable to create order');
      
      res.status(201).json({
        success: true,
        order,
      });
    } catch (error) {
      console.error("Error creating Razorpay order:", error.message);
      res.status(201).json({ message: "Server Error", error: error.message });
    }
  });
  //verify api

 

router.post("/buy/verifyPayment", async (req, res) => {
  try {
    const { payment_id, order_id, signature } = req.body;
    if (!payment_id || !order_id || !signature) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
      }
       // Validate the payment with Razorpay
  const isSignatureValid = verifyPaymentSignature(payment_id, order_id, signature);
  if (!isSignatureValid) {
    return res.status(400).json({ success: false, message: 'Invalid payment signature' });
  }

    const body = `${order_id}|${payment_id}` ;

    const expectedSignature = crypto
      .createHmac('sha256', apiKey)
      //.update(body.toString())
      .update(order_id + "|" + payment_id)
      .digest('hex');

    //const isAuthentic = expectedSignature === signature;

    //if (isAuthentic) {
      if (expectedSignature === signature) {
      // Payment is verified, you can save this info in your database
      await Payment.updatePaymentStatus(order_id, 'successful');  // Example
      res.status(400).json({ success: true });
    } else {
      // Signature mismatch
      res.status(400).json({ success: false, message: 'Payment verification failed' });
    }
  } catch (error) {
    console.error("Error during payment verification:", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});


/*// POST: Payment verification route
router.post('/verifyPayment', authenicate, async (req, res) => {
  try {
    const { payment_id, order_id, signature } = req.body;

    // Generate expected signature using Razorpay key
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_SECRET)
      .update(order_id + "|" + payment_id)
      .digest('hex');

    // Verify if signature matches
    if (generatedSignature === signature) {
      // Payment is successful, create the order
      const newOrder = new Order({
        userId: req.user.id,
        products: req.body.products,
        amount: req.body.amount,
        address: req.body.address,
      });

      await newOrder.save();
      res.status(200).json({ success: true, message: 'Payment successful and order created' });
    } else {
      res.status(400).json({ success: false, message: 'Payment verification failed' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Payment verification error', error });
  }
});*/
//order success
router.post('/order-success', authenicate, async (req, res) => {
    try {
      const newOrder = new Order({
        userId: req.user.id,
        products: req.body.products,
        amount: req.body.amount,
        address: req.body.address,
      });
  
      const savedOrder = await newOrder.save();
      res.status(400).json(savedOrder);
    } catch (err) {
      res.status(201).json({ message: 'Order creation failed', error: err });
    }
  });
  



router.get("/getkey", (req, res) => {
    console.log("Get key route hit");
    res.json({ key: apiKey });
  });

  


//for user logout
router.get("/logout", authenicate, async (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
            return curelem.token !== req.token
        });

        res.clearCookie("Amazonclone", { path: "/" });
        req.rootUser.save();
        res.status(201).json(req.rootUser.tokens);
        console.log("user logout");

    } catch (error) {
        console.log("error for user logout");
    }
});


  
  
 







module.exports=router;