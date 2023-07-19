import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Blog from './components/pages/Blog'
import News from './components/pages/News'
import Home1 from './components/pages/Home1'
const App = () => {
  return (
    <div className={`w-[100%] h-[100vh]`}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/page' element={<News/>}></Route>
        <Route path='/about' element={<Home1/>}></Route>
      </Routes>
    </div>
  )
}

export default App