import React, { useEffect,useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { userRequest } from '../axiosReqMethod';
import addDynamicScript from '../helper/addDynamicScript';
import { useSelector, useDispatch } from 'react-redux';
import { setError } from '../redux/errorRedux';

const Right = ({iteam}) => {
  const [price, setPrice] = useState(0);
  const navigate= useNavigate();
  const location = useLocation(); 

  const USER= useSelector((state) => state.USER.currentUser);
  const dispatch = useDispatch();
  // Razorpay Payment Handler
 
  const handleCheckout = async () => {

  
      if (USER||USER?.fname) {
        navigate('/login'); // Redirect to login if user is not logged in
        return;
      }
  
    
  

    // Loading Razorpay script dynamically
    if (!window.Razorpay) {
      await addDynamicScript('https://checkout.razorpay.com/v1/checkout.js');
    }
    try {
      // Create Razorpay order on backend
      const { data: { order } } = await userRequest.post('/buy/payments', {
        amount: price,  // Amount in rupees
        currency: 'INR', // Assuming INR as default
      });
       // Get Razorpay API key
       const { data: { key } } = await userRequest.get('/getkey');

       // Razorpay options configuration
       const options = {
         key: key, // API key from backend
         amount: order.amount,
         currency: 'INR',
         name: USER?.fname || "Guest User",
         description: `Order for ${USER?.fname|| 'Guest User '}`,
         image: 'https://yourstorelogo.com/logo.png',
         order_id: order.id, // Order ID from backend
         handler: async function (response) {
           // Verify payment on the backend
           const verify = await userRequest.post('/buy/verifyPayment', {
             payment_id: response.razorpay_payment_id,
             order_id: response.razorpay_order_id,
             signature: response.razorpay_signature,
           });
           if (verify.data.success) {
            navigate('/order-success'); // Redirect to order success page
          } else {
            dispatch(setError('Payment verification failed'));
          }
        },
        prefill: {
          name: USER?.fname ||"Guest User",
          email: USER?.email,
          contact: USER?.number,
        },
        theme: {
          color: '#3399cc',
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Error during checkout:', error);
      dispatch(setError('Checkout failed'));
    }
  };
  const handleAddress = () => {
    navigate('/shipping?step=2'); // Redirect to step 2 of the delivery address process
  };

  
  

  useEffect(() => {
      totalAmount();
  }, [iteam]);

  const totalAmount = () => {
      let price = 0
      if (Array.isArray(iteam)&& iteam.length) {
        iteam.forEach(item => {
          if (item && item.price && item.price.cost) {
            price += item.price.cost;
          }
        })}
        setPrice(price);
  }
  return (
    
    <div className='right_buy'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="rightimg"  />
    <div className='cost_right'>
        <p>Your order is eligible for FREE Delivery.</p><br />
        <span style={{color:"#565959"}}>Select this option at checkout. item_details

        </span>
        <h3>Subtotal ({iteam.length} items): <span style={{fontWeight:700}}>Rs{price}.00</span></h3>
        <button className='rightbuy_btn' onClick={handleCheckout}>Payment</button>
        <button className='rightbuy_btn' onClick={handleAddress}>Go to Address</button>
        
    </div>
    </div>
  )
}

export default Right