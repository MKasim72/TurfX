import React from 'react'
import Landing from '../components/Landing'
// import Navbar from './components/Navbar'
import Features from '../components/Features'
import Gallery from '../components/TopRated'
import Reviews from '../components/Reviews'
// import Footer from './components/Footer'
function Home() {
  return (
    <div className='bg-[#001242]'>
      <Landing/>
      <Features/>
      <Gallery/>
      <Reviews/>
    </div>
  )
}

export default Home
