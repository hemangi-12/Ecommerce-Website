import React from 'react'
import AddressCard from '../AddressCard'

import Buynow from './Buynow';

const OrderSummary = () => {
  
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard/>
      </div>
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
          <Buynow/>
        </div>
      </div>
      
    </div>
  )
}

export default OrderSummary