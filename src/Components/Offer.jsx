import React from 'react'
import pizza from '/src/assets/imgs/pizza.png'
import burg from '/src/assets/imgs/burg.png'
import arr from '/src/assets/imgs/arr.png'

function Offer() {
  return (
     <div className='w-[94vw] h-[24vw] bg-[#FE912F] flex flex-row gap-[3vw] rounded-[16px] relative top-[26vw] left-[3vw]'>
             <img className='w-[20vw] h-[21vw] relative top-[3vw]' src={pizza} alt="" />
             <div className='w-[48vw] h-[17vw] relative flex flex-col gap-[1vw] top-[2vw]'>
              <h1 className='text-[5vw] h-[6vw] font-[700] text-center w-[48vw]'>Get Free Meal</h1>
              <h2 className='text-[1.2vw] h-[6vw] relative left-[7.4vw] font-[500] text-center w-[32vw]'>Share your referral code with friends and family. When they place their first order, you'll both receive a discount on your next purchase</h2>
              <img className='w-[33vw] relative left-[7vw]' src={arr} alt="" />
             </div>
             <img className='relative right-[5vw] w-[23vw] h-[23vw]' src={burg} alt="" />
           </div>
  )
}

export default Offer