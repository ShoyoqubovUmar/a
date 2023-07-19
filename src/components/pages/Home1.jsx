import React from 'react'
import Navbar from '../Navbar'
import { Logo } from '../../Index'
import Top5 from '../Top5'
import Malumot from '../Malumot'
import Short from '../Short'
import Products from '../Products'
import Bg from '../Bg'
import About from '../About'
import Footer from '../Footer'

const Home1 = () => {
  return (
    <div>
        <div className=' bg-blue-600 flex justify-center items-center gap-10'>
            <img src={Logo} alt="" />
        <Navbar></Navbar>
        </div>
        <Top5></Top5>
        <Malumot></Malumot>
        <Products></Products>
        <Short></Short>
        <Bg></Bg>
        <About></About>
        <Footer></Footer>
    </div>
  )
}

export default Home1