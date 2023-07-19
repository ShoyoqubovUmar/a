import React from 'react'

const NewDoors = () => {
  return (
    <div className='flex flex-col items-start justify-start gap-4 py-20 px-24'>
        <h1 className='font-montserrat font-medium text-[29px] text-slate-500'>Новости The Doors</h1>
            <div className='flex items-center justify-center gap-10'>
                <div className='newdoor1 flex flex-col px-2'>
                    <h5 className='text-[13px] text-white font-montserrat font-normal w-[315px] py-2 px-2 bg-cyan-800 opacity-80 mt-[238px] br'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ratione tempora itaque dicta?</h5>
                </div>
                <div className='newdoor2 flex flex-col px-2'>
                    <h5 className='text-[13px] text-white font-montserrat font-normal w-[315px] py-2 px-2 bg-cyan-800 opacity-80 mt-[238px] br'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ratione tempora itaque dicta?</h5>
                </div>
                <div className='newdoor2 flex flex-col px-2'>
                    <h5 className='text-[13px] text-white font-montserrat font-normal w-[315px] py-2 px-2 bg-cyan-800 opacity-80 mt-[238px] br'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ratione tempora itaque dicta?</h5>
                </div>
            </div>
    </div>
  )
}

export default NewDoors