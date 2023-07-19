import React, { useState } from 'react'
import { SearchImg, ShopImg, UserImg } from '../Index'
import { navigationLinks } from '../constants'

const Navbar = () => { 
    const [toggleNav, setToggleNav] = useState(false)
    const [active, setActive] = useState('home')

    const toggleHandler = ()=>setToggleNav(prev=> !prev)
    const activeHandler = id => {
        setActive(id)
        if(id === 'home'){
            window.location.replace('/')
        }
        if(id === 'contact'){
            window.location.replace('/contact')
        }
        if(id === 'about'){
            window.location.replace('/about')
        }
        if(id === 'page'){
            window.location.replace('/page')
        }
        if(id === 'blog'){
            window.location.replace('/blog')
        }
    }
  return (
    <div className='bg-transparent py-4 flex justify-center items-center'>
        <div className='flex items-start mr-20'>
            <button type='button' className='px-7 py-2 button1 text-white rounded-[6px]'>Katalog</button>
        </div>
        <ul className='sm:flex hidden justify-center items-center gap-4 list-none mr-28  text-slate-300  '>
            {navigationLinks.map((nav, idx) => {
                return(
                    <li key={nav.id} onClick={()=>activeHandler(nav.id)} className={`font-montserrat font-normal cursor-pointer text-[16px] hover:text-white transition-all duration-500 ${active === nav.id ? 'text-white': 'text-slate-300'}` }>{nav.title}</li>
                )
            } )}
        </ul>
        <div className='flex items-center justify-center gap-4 cursor-pointer'>
            <img src={SearchImg} alt="" />
            <img src={UserImg} alt="" />
            <img src={ShopImg} alt="" />
        </div>
    </div>
  )
}

export default Navbar