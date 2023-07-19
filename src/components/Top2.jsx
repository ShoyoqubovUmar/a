import React from 'react'
import { Phone1 } from '../Index'

const Top2 = () => {
  return (
    <div className=' w-[100%] h-[100vh]'>
      <div className='flex flex-col items-center justify-center gap-6 pt-56'>
          <h1 className='font-montserrat font-medium flex items-center justify-center gap-2 text-[46px] text-white'><img src={Phone1} alt="" /> +123 456 7890</h1>
          <p className='font-montserrat font-normal text-center text-white text-[22px]'>Менеджеры компании ответят на все <br /> вопросы по телефону:</p>
      </div>
    </div>
  )
}

export default Top2