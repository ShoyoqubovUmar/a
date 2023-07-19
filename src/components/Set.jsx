import React from 'react'
import { Facebook1,  Instagram1, Telegram, Youtube } from '../Index'

const Set = () => {
  return (
    <div>
        <div className='flex items-center justify-between px-28 py-24'>
            <h1 className='font-montserrat font-medium text-slate-500 text-[32px]'>Социальные <br /> Сети</h1>
            <div className='flex flex-col items-start justify-start gap-8'>
                <p className='font-montserrat font-normal text-slate-500 text-[19px]'>Подписывайтесь на наши социальные сети и будьте в курсе всех <br /> событий центра The Doors</p>
                <div className='flex items-center justify-center gap-14'> 
                    <img src={Instagram1} alt="" />
                    <img src={Facebook1} alt="" />
                    <img src={Youtube} alt="" />
                    <img src={Telegram} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Set