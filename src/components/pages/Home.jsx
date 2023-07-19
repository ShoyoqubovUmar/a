import React from 'react'
import Top from '../Top'
import Navbar from '../Navbar'
import Short from '../Short'
import Products from '../Products'
import About from '../About'
import Clients from '../Clients'
import Footer from '../Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-14'>
      <div className='home'>
      <Navbar/>
      <Top/>
      </div>
      <Short/>
      <Products/>
      <About></About>
      <Clients></Clients>
      <Footer></Footer>
    </div>
  )
}

export default Home