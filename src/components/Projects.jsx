import React from 'react'
import { Lol1 } from '../Index'

const Projects = () => {
  return (
    <div className='flex flex-col items-start justify-start gap-6 py-16 px-10'>
        <h1 className='font-montserrat font-normal text-[32px] text-slate-600'>Наши проекты</h1>
            <div className='flex items-center justify-center gap-8'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <img src={Lol1} alt="" />
                    <img src={Lol1} alt="" />
                </div>
                <div className='flex flex-col items-center justify-center gap-4 mt-16'>
                    <img src={Lol1} alt="" />
                    <img src={Lol1} alt="" />
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <img src={Lol1} alt="" />
                    <img src={Lol1} alt="" />
                </div>
                <div className='flex flex-col items-center justify-center gap-4 mt-16'>
                    <img src={Lol1} alt="" />
                    <img src={Lol1} alt="" />
                </div>
            </div>
    </div>
  )
}

export default Projects