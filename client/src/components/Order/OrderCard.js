import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import "./ordercard.css";
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const navigate=useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl ' style={{border:"1px solid black", marginRight:"100px"}}>
        <Grid container spacing={2} sx={{justifyContent:"space-between", height:"150px"}} >
            <Grid item xs={6} className="custom-grid-item">
                <div className='order-card-container'>
                    <img className='order-card-image' src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70"alt=""/>
                  <div className='order-card-text'>
                    <p className='order-card-description'>Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)</p>
                    <p className='opacity-50 text-xs font-semibold'>Capacity:1.5L</p>
                    <p className='opacity-50 text-xs font-semibold'>Color:Silver,Black</p>
                  </div>
                </div>

            </Grid>

            <Grid item xs={2}>
                <p>RS 625</p>
            </Grid>
            <Grid item xs={4}>
                {true&& <div><p>
                    <AdjustIcon sx={{width:"18px",height:"18px"}} className='text-green-600 mr-2 text-sm '/>
                    <span> 
                        Delivered On March 03
                        </span>
                       
                   
                </p>
                <p className='text-xs'style={{gap:"2px"}}>Your Item Has Been Delivered</p>
                </div> }
                {false&&<p>
                <span>Expected Delivery On March 03</span>
                </p>}
            </Grid>
            </Grid>   
             </div>
  )
}

export default OrderCard