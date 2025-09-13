import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './component/hero'
import Navbar from './component/navbar'
import Category from './component/Category'
import DealOfTheDay from './component/dealoftheday'
import TopCollection from './component/topcollection'
import Explore from './component/explore'
import Guidance from './component/Guidance'
import Enthusiast from './component/enthusiatist'
import Footer from './component/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Category/>
      <DealOfTheDay/>
      <TopCollection/>
      <Explore/>
      <Guidance/>
      <Enthusiast/>
      <Footer/>
    </>
  )
}

export default App
