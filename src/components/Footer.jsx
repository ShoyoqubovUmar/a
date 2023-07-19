import React from 'react'
import { Facebook, Instagram, Location, Phone, Wallet1 } from '../Index'

const Footer = () => {
  return (
    <div className='flex flex-col items-start justify-start bg-slate-100 pl-20 pr-32 pt-20 pb-6'>
        <div className='flex items-start justify-start gap-24'>
            <div className='flex flex-col items-start justify-start gap-3'>
            <h1 className='font-montserrat font-medium text-slate-600 text-[29px]'>The Door</h1>
            <p className='font-montserrat font-normal text-slate-400 w-[340px]'>Quis nostrud exercitatin ullamc boris nisi ut aliquip ex ea commodo conse.</p>
            <div className='relative'>
                <input type="text" placeholder='Your email here' className='flex items-start justify-between py-2 pl-3 pr-[60px] rounded-[7px] relative'/>
                <img src={Wallet1} alt="" className='absolute bottom-4 left-56'/>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <img src={Facebook} alt="" />
                <img src={Instagram} alt="" />
                <img src={Facebook} alt="" />
            </div>
            </div>
            <div className='flex flex-col items-start justify-start gap-3'>
            <h1 className='font-montserrat font-medium text-slate-600 text-[22px]'>Address</h1>
            <div className='flex items-center justify-center gap-5'>
                <img src={Location} alt="" />
                <p className='font-montserrat font-normal text-slate-400 w-[180px]'>20, Awesome Road, New York, Usa 4D BS3</p>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <img src={Phone} alt="" />
                <p className='font-montserrat font-normal text-slate-400'>+123 456 7890</p>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <img src={Wallet1} alt="" />
                <p className='font-montserrat font-normal text-slate-400'>hello@ulina.com</p>
            </div>
            </div>
            <div className='flex flex-col items-start justify-start gap-3'>
            <h1 className='font-montserrat font-medium text-slate-600 text-[22px] w-40'>Usful Links</h1>
            <p className='font-montserrat font-normal text-slate-400'>Shop Cupon</p>
            <p className='font-montserrat font-normal text-slate-400'>About Us</p>
            <p className='font-montserrat font-normal text-slate-400'>Carrer</p>
            <p className='font-montserrat font-normal text-slate-400'>Supports</p>
            </div>
            <div className='flex flex-col items-start justify-start gap-3'>
            <h1 className='font-montserrat font-medium text-slate-600 text-[22px]'>Katalog</h1>
            <p className='font-montserrat font-normal text-slate-400'>Lorem</p>
            <p className='font-montserrat font-normal text-slate-400'>Lorem</p>
            <p className='font-montserrat font-normal text-slate-400'>Lorem</p>
            <p className='font-montserrat font-normal text-slate-400'>Lorem</p>
            </div>
        </div>
        <br className='w-full border-gray-600 h-1'/>
    </div>
  )
}

export default Footer