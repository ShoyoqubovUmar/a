import React from 'react'
import Navbar from '../Navbar'
import Top3 from '../Top3'
import NewDoors from '../NewDoors'
import Set from '../Set'
import Short from '../Short'
import Footer from '../Footer'

const Blog = () => {
  return (
    <div>
        <div className='blog'>
            <Navbar></Navbar>
            <Top3></Top3>
        </div>
            <NewDoors></NewDoors>
            <Set></Set>
            <Short></Short>
            <Footer></Footer>
    </div>
  )
}

export default Blog