import React from 'react'
import AddressCard from '../AddressCard'
import "./orderdetail.css";
import OrderTracker from './OrderTracker';
import { Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import Box from '@mui/material/Box';
const OrderDetails = () => {
  return (
    <div className='page'style={{width: "80%",
        position: "relative",
        top:"60px",
        marginLeft: "80px"}}>
        <div>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
            <AddressCard/>
        </div>
        <div className='py-20' style={{paddingTop: "40px", paddingBottom: "40px"}}>
            <OrderTracker activeStep={3}/>
        </div>
        <Grid className='space-y-5' container>
            {[1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:'space-between'}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                    <img className='w-[rem] h-[rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70"alt=""/>
                    <div className='space-y-2 ml-5' style={{marginLeft:"20px"}}>
                    <p className='font-semibold'>Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)</p>
                    <p className='space-x-5 opacity-50 text-xs font-semibold'>Capacity:1.5L</p>
                    <p>Color:Silver,Black</p>
                    <p>RS 625</p>
                    </div>
                    </div>
                </Grid>

                <Grid item>
                    <Box sx={{color:deepPurple[500],display: 'flex', alignItems: 'center'}}>
                        <StarOutlineRoundedIcon sx={{fontSize:"2rem"}} className="px-2 text-5xl"/>
                        <span>Rate & Review Product</span>

                    </Box>
                    
                </Grid>

            </Grid>)}
            

        </Grid>
       
    </div>
  )
}

export default OrderDetails