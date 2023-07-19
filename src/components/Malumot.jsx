import React from 'react'
import { A, B, C, Like } from '../Index'

const Malumot = () => {
  return (
    <div className='flex items-start justify-between pl-12 py-20 bg-blue-800 mb-20'>
        <div className='flex flex-col  items-start justify-start gap-9'>
            <h1 className='font-montserrat font-medium text-white text-[52px]'>MAGNIFICENT <br />WORK</h1>
            <p className='font-montserrat font-normal text-white w-[500px] text-[14px]'>Donec bibendum, dui id ultrices molestie, neque neque porta felis, id viverra ligula justo interdum mi. Dummy content lorem ispum nunc malesuada, risus eu maximus consequat, purus enim ultricies nisi, elit ante et turpis. </p>
            <div className='flex items-center justify-center gap-14'>
                <img src={Like} alt="" />
                    <div className='flex flex-col items-start justify-start gap-2'>
                        <h2 className='font-montserrat font-medium text-[52px] text-white'>875+</h2>
                        <p className='font-montserrat font-normal text-[12px] text-slate-300'>Projects Done</p>
                    </div>
            </div>
            <div className='flex items-center justify-center gap-14'>
                <img src={Like} alt="" />
                    <div className='flex flex-col items-start justify-start gap-2'>
                        <h2 className='font-montserrat font-medium text-[52px] text-white'>875+</h2>
                        <p className='font-montserrat font-normal text-[12px] text-slate-300'>Projects Done</p>
                    </div>
            </div>
        </div>
        <div className='flex items-center justify-center gap-8'>
            <img src={A} alt="" />
            <div className='flex flex-col items-start justify-start gap-8'>
                <img src={B} alt="" />
                <img src={C} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Malumot