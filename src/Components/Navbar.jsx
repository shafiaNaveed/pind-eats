import React from 'react'
import { useState } from 'react';
import logo from '/src/assets/imgs/logo.png'

function Navbar() {
  const [active, setActive] = useState("Home");
  const links = ["Home", "Food", "Gifts", "Properties"];
  return (
    <div>
      <nav className='flex px-[2vw] items-center justify-between py-[2vw]'>
        <div className='flex flex-row gap-[2vw]'>
            <img className='w-[4vw] h-[5vw]' src={logo} alt="" />
            <h1 className='w-[10vw] h-[4vw] text-[2vw] relative right-[2vw] top-[1vw] font-[600]' >PindEats</h1>
          </div>
          <div className='flex space-x-6'>
            {links.map((link) => (
              <button key={link} onClick={()=>setActive(link)} className={`relative text-[1.7vw] font-[600] capitalize transition-all duration-300 ease-in-out hover:text-orange-900`}>{link}<span className={`absolute left-0 -bottom-0 h-[0.3vw] bg-black transition-all duration-300 ${active === link ? "w-full" : "w-0"} group-hover:w-full`}></span></button>
            ))}
          </div>
          <button className='w-[11vw] active:scale-90 hover:text-orange-900 active:bg-[#ffb340] font-[500] relative bg-white text-[1.4vw] border rounded-full h-[3vw]'>
              Login/Sigup
            </button>
      </nav>
    </div>
  )
}

export default Navbar