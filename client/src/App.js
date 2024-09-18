
import './App.css';
import axios from 'axios';
import React from 'react';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Signup from './components/signup_sign/SignUp';
import Sign_in from './components/signup_sign/Sign_in';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import { Routes,Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import Eproducts from './components/Eproducts/eproducts';
import Address from './components/buynow/Address'
import Order from './components/Order/Order';
import OrderDetails from './components/Order/OrderDetails';





function App() {
  /*const [responseId,setResponseId]=useState("");
  const [responseState,setResponseState]=useState([]);

  const loadScript=(src)=>{
    return new Promise((resolve)=>{
      const script=document.createElement("script");

      script.src=src;

      script.onload=()=>{
        resolve(true)
      }
      script.onerror=()=>{
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  const createRazorpayOrder=(amount)=>{
    let data=JSON.stringify({
      amount:amount*100,
      currency:"INR"
    })

    let config={
      method:"post",
      maxBodyLength:Infinity,
      url:"http://localhost:3000/orders",
      headers:{
        'Content-Type':"application/json"
      },
      data:data
    }

    axios.request(config)
    .then((response)=>{
      console.log(JSON.stringify(response.data))

      //handleRazorpayScreen(response.data.amount)
    })

    .catch((error)=>{
          console.log("error at",error)
    })
  }

  const handleRazorpayScreen =async(amount)=>{
    const res=await loadScript("https:/checkout.razorpay.com/v1/checout.js")

    if(!res){
      alert("some error at razorpay screen loading")
      return;
    }
    const options={
      key:'rzp_test_jxiXXlMiiWPvLH',
      amount:amount,
      currency:'INR',
      name:"Amazon",
      description:"payment to amazon",
      handler:function(response){
        setResponseId(resonse.razorpay_payment_id)
    
      },
      prefill:{
        name:"Amazon",
        email:"amazon@gmail.com"
      },
      theme:{
        color:"#F4C430"
      }
    }

    const paymentObject=new window.Razorpay(options)
    paymentObject.open()
  }

  const paymentFetch=(e)=>{
    e.preventDefault();

    const paymentId=e.target.paymentId.value;

    axios.get(`http://localhost:3000/payment/${paymentId}`)
    .then((response)=>{
      console.log(response.data);
      setResponseState(response.data)
    })
    .catch((error)=>{
      console.log("error occures",error)
    })
  }*/

  const [data,setData]=useState(false);


  useEffect(()=>{
    setTimeout(()=>{
      setData(true)

    },2000)
  },[])
  return (
    <>
    {
      data ? (
        <>
         <Navbaar />
    <Newnav />
    <Routes>
      <Route path="/" element={<Maincomp />} />
      <Route path="/eproducts/" element={<Eproducts />} />
      <Route path="/login" element={<Sign_in />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/getproductsone/:id" element={<Cart />} />
      
      <Route path="/buynow" element={<Buynow />} />
      <Route path="/shipping" element={<Address />} />
      <Route path="/account/order" element={<Order />} />
      <Route path="/account/order/:orderId" element={<OrderDetails />} />
      
      
      
    </Routes>
    <Footer />
    </>
      
      ):(
        <div className='circle'>
          <CircularProgress />
          <h2>Loading</h2>
        </div>
      )
    }
    </>
  )
}
   
  


export default App;
