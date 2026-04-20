import React from 'react'
import logo from '/src/assets/imgs/logo.png'

function Navbar() {
  return (
    <div>
        <nav className='w-[100vw] pl-[2vw] pr-[2vw] pt-[0.6vw] justify-between flex flex-row h-[6vw] text-center items-center'>
            <div className='flex flex-row gap-[2vw]'>
              <img className='w-[4vw] h-[5vw]' src={logo} alt="" />
            <h1 className='w-[10vw] h-[4vw] text-[2vw] relative right-[2vw] top-2 font-[600]' >PindEats</h1>
            </div>
              <ul className='w-[25vw] h-[4vw] flex flex-row gap-[2vw] relative top-2 text-[1.5vw] font-[500]'>
                <li className='w-[12vw]'>Home</li>
              <li className='w-[12vw]'>Food</li>
              <li className='w-[12vw]'>Gift</li>
              <li className='w-[12vw]'>Properties</li>
              </ul>
            <button className='w-[11vw] font-[500] relative bg-white top-1 text-[1.4vw] border rounded-full h-[3vw]'>
              Login/Sigup
            </button>
        </nav>
    </div>
  )
}

export default Navbar