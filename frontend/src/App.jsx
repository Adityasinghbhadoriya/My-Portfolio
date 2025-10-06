import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import MouseFollower from './Components/MouseFollower'

const App = () => {

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      {/* <MouseFollower/> */}
    </div>
  )
}

export default App