import React from 'react'
import { Artel, Human, Left, Lg, Lol, Right, Samsung, Star } from '../Index'

const Clients = () => {
  return (
    <div className='flex flex-col items-start justify-start'>
    <div className='flex items-start justify-start py-20'>
        <div className='bg-slate-100 px-20 py-20 flex  items-start justify-start gap-20'>
            <div className='flex flex-col items-start gap-2'>
                <h1 className='font-medium font-montserrat text-[34px] w-[300px]'>Что говорят о нас клиенты</h1>
                <p className='font-normal font-montserrat text-[12px] w-[400px]'>Bobore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat ion ullamco laboris</p>
                <div className='flex items-center justify-center gap-2'>
                    <img src={Left} alt="" className='cursor-pointer'/>
                    <img src={Right} alt="" className='cursor-pointer' />
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
    </div>
    <div className='flex flex-col items-start justify-start p-20 gap-12'>
        <h1 className='font-montserrat font-medium text-[29px] '>Наши клиенты</h1>
        <div className='flex items-center justify-center gap-8'>
        <div className='bg-white shadow-black shadow flex items-center justify-center px-10 py-20'>
            <img src={Artel} alt="" />
          </div>
          <div className='bg-indigo-700 shadow-black shadow flex items-center justify-center px-10 py-20'>
            <img src={Lg} alt="" />
          </div>
          <div className='bg-white shadow-black shadow flex items-center justify-center px-10 py-20'>
            <img src={Samsung} alt="" />
          </div>
          <div className='bg-indigo-700 shadow-black shadow flex items-center justify-center px-10 py-20'>
            <img src={Artel} alt="" />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Clients