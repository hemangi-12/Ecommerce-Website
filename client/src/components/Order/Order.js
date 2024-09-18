import { Grid } from '@mui/material'
import React from 'react'
import "./order.css";
import OrderCard from './OrderCard';

const Order = () => {
    const orderStatus=[
        {lable:"On The Way",value:"on_the_way"},
        {lable:"Delivered",value:"delivered"},
        {lable:"Cancelled",value:"cancelled"},
        {lable:"Returned",value:"returned"}
    ]
  return (
    <div className='pagedesign'>
        <Grid container sx={{justifyContent:"space-between"}}>

            <Grid item xs={2.5}>
                <div className='filter-container'>
                    <h1 className='filter-title'>Filter</h1>
                    <div className='filter-options'>
                        <h1 className='filter-options-title'>ORDER STATUS</h1>

                      {orderStatus.map((option)=>  <div className='filter-option'>
                            <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border-gray-300
                            text-indigo=600 focus:ring-indigo-500'/>
                            <lable className='ml-3 text-sm text-grey-600' htmlFor={option.value}>
                                {option.lable}
                            </lable>
                        </div>
                    )}
                    </div>
                </div>

            </Grid>

            <Grid item xs={9}>
                <div className='space-y-5' >
                {[1,1,1,1,1,1].map((item)=><OrderCard/>)}

                </div>
              

            </Grid>
        </Grid>

    </div>
  
  )
}

export default Order