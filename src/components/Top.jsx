import React from 'react'
import { BtnSearchImg, DoorImg, Home1Img } from '../Index'
import About from './About'

const Top = () => {
  return (
    <div className='flex justify-start items-start py-10 lg:gap-52 gap-28 md:gap-28 gap-16'>
        <div className=' lg:ml-16 ml-6'>
            <img src={DoorImg} alt="" className='w-[100%] h-[100%] rounded-full'/>
        </div>
        <div className='flex flex-col justify-center items-center flex-wrap'>
            <h1 className='font-montserrat font-medium text-white sm:text-[40px] text-[32px] text-center'>Make Your Fashion <br /> More Perfect</h1>
            <p className='font-montserrat font-normal text-white sm:text-[18px] text-[11px] sm:w-[600px] w-[400px]mt-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button type='button' className='px-6 py-2 button1 text-white mt-4 rounded-3xl'>Подробнее</button>
            <div className='flex justify-between items-center relative w-[300px] gap-20 '>
               <input type="text" placeholder='Search production' className='flex placeholder:flex justify-start items-start px-16 py-4 rounded-[30px] mt-10 bg-white opacity-[20%] text-dark'/>
               <img src={BtnSearchImg} alt="" className='absolute top-[86px] left-[242px] cursor-pointer'/>
               <img src={Home1Img} alt="" className='rounded-[100%] w-44 h-44 bg-no-repeat bg-center bg-cover'/>
            </div>
        </div>
    </div>
  )
}

export default Top