import React from 'react'
import { Icon, Illustrasi } from '../Index'

const Top5 = () => {
  return (
    <div className='flex justify-center items-center mb-[1000px]'>
        <div className='container flex items-center justify-center relative'>
            <div className='flex flex-col items-start justify-start gap-6 absolute top-40 left-[100px] z-10'>
                <h1 className='font-montserrat font-semibold text-[100px] text-blue-900'>ECOHOUSE <br />STYLE</h1>
                <p className='font-montserrat font-normal text-gray-600 w-[400px] text-[14px]'>Stay informed about the market with real estate news and insights provided by real estate professionals and government agencies.</p>
                <div className='flex items-center justify-center gap-8'>
                    <button className='bg-blue-900 px-6 py-2 rounded-3xl text-white'>See Our Case Studies</button>
                    <button className='flex items-center justify-center gap-5 px-4 py-2 border-black border-[1px] text-black rounded-3xl'><img src={Icon} alt="" />Watch A Demo</button>
                </div>
            </div>
            <img src={Illustrasi} alt="" className='absolute top-10 -right-1'/>
        </div>
    </div>
  )
}

export default Top5