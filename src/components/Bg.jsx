import React from 'react'
import { Human, Lol, Star } from '../Index'

const Bg = () => {
  return (
    <div className='flex items-start justify-between py-24 px-16 bg-blue-900'>
        <div className='flex flex-col justify-start items-start gap-6 text-white'>
            <h1 className='font-montserrat font-medium text-[42px]'>CUSTOMER IS <br /> OUR PRIORCITY</h1>
            <p className='font-montserrat font-normal text-[14px] w-[310px]'>Our clients are very satisfied with our service which can be understood by looking at their feedback</p>
        </div>
        <div className='flex flex-col items-start justify-start bg-white shadow-slate-100 p-8 gap-10 '>
                <div className='flex items-center justify-between gap-20  '>
                  <div className='flex items-start justify-start gap-2'>
                    <img src={Lol} alt="" />
                    <img src={Lol} alt="" />
                  </div>
                    <div className='flex items-start justify-start gap-1'>
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                    </div>
                </div>
                <p className='font-montserrat font-normal w-[250px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className='flex items-center justify-center gap-4'>
                  <img src={Human} alt="" />
                  <div className='flex flex-col items-start gap-1'>
                  <h3 className='font-montserrat font-medium text-[28px]'>Md Saimon</h3>
                  <p className='font-montserrat font-normal text-[11px]'>Journalist</p>
                  </div>
                </div>
            </div>
            <div className='flex flex-col items-start justify-start bg-white shadow-slate-100 p-8 gap-10 '>
                <div className='flex items-center justify-between gap-20  '>
                  <div className='flex items-start justify-start gap-2'>
                    <img src={Lol} alt="" />
                    <img src={Lol} alt="" />
                  </div>
                    <div className='flex items-start justify-start gap-1'>
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                    </div>
                </div>
                <p className='font-montserrat font-normal w-[250px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className='flex items-center justify-center gap-4'>
                  <img src={Human} alt="" />
                  <div className='flex flex-col items-start gap-1'>
                  <h3 className='font-montserrat font-medium text-[28px]'>Md Saimon</h3>
                  <p className='font-montserrat font-normal text-[11px]'>Journalist</p>
                  </div>
                </div>
            </div>
    </div>
  )
}

export default Bg