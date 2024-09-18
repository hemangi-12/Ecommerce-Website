import React from 'react'

const AddressCard = () => {
  return (
    <div className='space-y-3' style={{marginTop: '0.75rem'}}>
      <p className='font-semibold' style={{fontWeight: '600'}}>Ram Kapoor</p>
      <p>Pune, Moze Nagar Lohegaon,411207</p>
      <div className='space-y-1' style={{marginTop: '0.25rem'}}>
        <p className='font-semibold'style={{fontWeight: '600'}}>Phone Number</p>
        <p>7498689056</p>
      </div>
    </div>
  )
}

export default AddressCard