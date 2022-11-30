import React from 'react'
import Header from '../../components/Header'

function CheckoutSuccess() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex-1 h-full overflow-scroll">
        <div className="h-full max-w-6xl mx-auto px-5 py-10">
            <p className='text-center text-2xl font-medium mb-2'>HERE'S YOUR RECIEPT</p>
            <p className='font-extrabold text-5xl text-center text-primary-600'>Thank You For Your Order</p>
            <div className='mt-5'>
                <p className='text-3xl text-neutral-500 font-light text-center'>Your order was completed successfully!</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSuccess