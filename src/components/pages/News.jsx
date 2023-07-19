import React from 'react'
import Navbar from '../Navbar'
import Top4 from '../Top4'
import Projects from '../Projects'
import Short from '../Short'
import Footer from '../Footer'

const News = () => {
  return (
    <div>
        <div className='news w[100%] h-[100vh]'>
            <Navbar></Navbar>
            <Top4></Top4>
        </div>
        <Projects></Projects>
        <Short></Short>
        <Footer></Footer>
    </div>
  )
}

export default News