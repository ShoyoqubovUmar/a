import React from 'react'
import Navbar from '../Navbar'
import Top2 from '../Top2'
import Set from '../Set'
import Short from '../Short'
import Footer from '../Footer'

const Contact = () => {
  return (
    <div>
      <div className='contact'> 
        <Navbar></Navbar>
        <Top2></Top2>
      </div>
        <Set></Set>
        <Short></Short>
        <Footer></Footer>
    </div>
  )
}

export default Contact