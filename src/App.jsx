import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Featured from './Components/Featured'
import Gifts from './Components/Gifts'
import Section from './Components/Section'
import Main from './Components/Main'
import Offer from './Components/Offer'
import bg from '/src/assets/imgs/bg.png'
import Contact from './Components/Contact'

function App() {
  return (
    <div>
      <div className='relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-1/2 lg:width-[50%] h-full bg-no-repeat bg-cover bg-right-top -z-10 ' style={{backgroundImage: `url(${bg})`,backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', backgroundPosition: 'right top'}}></div>
        <Navbar/>
      <Hero/>
      </div>
      <Featured/>
      <Gifts/>
      <Section/>
      <Main/>
      <Offer/>
      <Contact/>
    </div>
  )
}

export default App