import React from 'react'
import { Car1, Oclock, Smth, Wallet, X } from '../Index'

const Short = () => {
  return (
    <div className='flex  items-center justify-center gap-10 md:px-20 px-26 py-12 mb-12'>
        <div className='flex flex-col items-center justify-center gap-3'>
            <img src={Car1} alt="" />
            <h2>Free Shipping</h2>
            <p className='font-montserrat font-normal text-slate-600 text-center'>Ut enim ad minim veniam liquip ami tomader</p>
        </div>
        <img src={X} alt="" />
        <div className='flex flex-col items-center justify-center gap-3'>
            <img src={Wallet} alt="" />
            <h2>Secure Payments</h2>
            <p className='font-montserrat font-normal text-slate-600 text-center'>Eonim ad minim veniam liquip tomader</p>
        </div>
        <img src={X} alt="" />
        <div className='flex flex-col items-center justify-center gap-3'>
            <img src={Smth} alt="" />
            <h2>Easy Returns</h2>
            <p className='font-montserrat font-normal text-slate-600 text-center'>Be enim ad minim veniam liquipa ami tomader</p>
        </div>
        <img src={X} alt="" />
        <div className='flex flex-col items-center justify-center gap-3'>
            <img src={Oclock} alt="" />
            <h2>24/7 Support</h2>
            <p className='font-montserrat font-normal text-slate-600 text-center'>Ut enim ad minim veniam liquip ami tomader</p>
        </div>
    </div>
  )
}

export default Short