import React from 'react'
import { Doira, Smth1 } from '../Index'

const About = () => {
  return (
    <div className='lol flex items-center justify-between px-52 '>
        <div className='relative w-[300px]'>
            <img src={Doira} alt="" className='absolute -bottom-36'/>
            <img src={Smth1} alt="" className='absolute -bottom-32 -right-14'/>
        </div>
        <div className=' bg-zinc-900 opacity-[80%] bg-transparent p-4'>
            <h1 className='text-white font-montserrat font-medium'>О нас</h1>
            <p className='text-white font-montserrat font-normal w-[400px]'>Международный концерн The Door — это промышленная группа глубокоинтегрированных производственных предприятий, общей целью которых является комплексная поставка полнокомплектных решений для объектов промышленного строительства, частного домостроения, а также объектов специального назначения, городской инфраструктуры и сельского хозяйства. Все предлагаемые решения полностью состоят из продукции DoorHan, кроме того, спроектированы и изготовлены на собственных заводах концерна The Door.</p>
        </div>
    </div>
  )
}

export default About