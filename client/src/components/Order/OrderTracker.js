import { StepLabel, Stepper } from '@mui/material'
import React from 'react'
import Step from '@mui/material/Step';

const OrderTracker = ({activeStep}) => {
    const steps=['Placed', 'Order Confirmation', 'Shipped', 'Out For Delivery','Delivered']
  return (
    <div className='order-tracker' style={{ width: "100%"}}>
        <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label)=><Step>
            <StepLabel sx={{color:"#9155FD",fontSize:"44px"}}>{label}</StepLabel>
        </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker