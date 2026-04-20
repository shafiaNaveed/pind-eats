import React from 'react'
import burger from '/src/assets/imgs/burger.png'
import arrow from '/src/assets/imgs/arrow.png'
import img from '/src/assets/imgs/a.png'
import img1 from '/src/assets/imgs/a2.png'
import { FaSearch, FaVideo, FaYoutube } from 'react-icons/fa'

function Hero() {
  return (
     <div className='w-[100vw] h-[65vw] relative items-center top-[5vw] flex flex-row'>
        <div className='w-[40vw] h-[34vw] relative top-[2vw] gap-[3vw] flex flex-col left-10'>
        <div className='w-[15vw] text-[#FF7900] text-[1.2vw] text-center h-[3vw] bg-[#FFD6B1] rounded-full p-[0.5vw]'>#1     Best  Resturent  Food</div>
    <div className='w-[40vw] h-[14vw] flex flex-col gap-[0.5vw]'>
        <div className='w-[40vw] h-[8vw] text-[2.5vw] font-[800] font-sans'>Your favorite restaurants
Food,delivered!</div>
<div className='w-[40vw] h-[5vw] text-[1.6vw] font-[400] font-sans'>Order from your favorite restaurants, and get it delivered right to
your door.</div>
    </div>
        <div className='flex flex-row w-[40vw] h-[4vw] rounded-full border gap-[2.3vw] border-gray-300 shadow shadow-gray-400'>
            <FaSearch className='relative top-[1.2vw] text-gray-600 text-[1.6vw] left-[1.6vw]'/>
            <input className='w-[15vw] bg-transparent text-gray-600 text-[1.4vw] font-[500]' type="text" value="Enter delivery address" />
            <button className='w-[10vw] h-[3vw] bg-orange-500 left-[8vw] rounded-full text-white text-[1.3vw] relative top-[0.5vw]'>Find Food</button>
        </div>
        <div className='flex flex-row gap-[2vw]'>
            <button className='w-[10vw] h-[3vw] bg-orange-500 rounded-full text-[1.3vw]'>Buy Now</button>
        <button className='w-[13vw] h-[3vw] p-[0.4vw] text-[#FE912F] text-start border border-[#FE912F] rounded-full text-[1.3vw]'>Watch Demo</button>
        <FaYoutube className='text-[#FE912F] text-[2vw] rounded-[50px] relative right-[5vw] top-[0.5vw]'/>
        </div>
    </div>
    <div>
        <img className='w-[30vw] h-[13vw] relative bottom-[16vw] right-[10vw]' src={arrow} alt="" />
    </div>
    <div className='w-[80vw] h-[65vw] '>
        <div className='flex flex-row'>
                    <img className='w-[3vw] h-[5vw] relative top-[17vw] left-[9vw]' src={img} alt="" />
        <img className='w-[3vw] h-[5vw] relative top-[19.7vw] left-[29vw]' src={img1} alt="" />
        </div>
        <img className='w-[50vw] h-[30vw] relative top-[18vw]' src={burger} alt="" />
    </div>
     </div>
  )
}

export default Hero