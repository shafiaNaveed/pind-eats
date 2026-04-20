import React from 'react'
import map from '/src/assets/imgs/map.png' 
import arrow from '/src/assets/imgs/v2.png' 

function Main() {
  return (
        <div className='w-[94vw] h-[30vw] bg-[#FFD4AD] flex flex-row p-[3vw] gap-[30vw] rounded-[16px] relative top-[22vw] left-[3vw]'>
            <img className='w-[25vw] h-[25vw] relative left-[4vw]' src={map} alt="" />
            <div className='w-[23vw] h-[26vw] flex flex-col'>
                <div className='w-[23vw] h-[11vw] gap-[1vw] flex flex-col'>
                        <h1 className='text-[1.4vw] font-[600] tracking-[0%] leading-[100%]'>Location</h1>
                    <h1 className='font-[700] text-[2vw] tracking-[0%] leading-[100%]'>Find a [Resturent Name] Near you!</h1>
                    <button className='w-[11vw] text-[1.3vw] gap-[1vw] flex text-start items-center h-[3.2vw] bg-black text-white rounded-[0.5vw]'>Get Direction
                        <img className='h-[1.3vw]' src={arrow} alt="" />
                    </button>
                </div>
                <div className='w-[12vw] h-[13vw] flex flex-col gap-[1.8vw] relative top-[1.6vw]'>
                    <div className='w-[12vw] h-[3vw]'>
                        <h1 className='text-[1vw] font-[700]'>Downtown Branch</h1>
                        <h3 className='text-[0.8vw] font-[600]'>123 Main Street, Berlin, 10115</h3>
                    </div>
                    <div className='w-[12vw] h-[3vw]'>
                        <h1 className='text-[1vw] font-[700]'>Riverside Outlet</h1>
                        <h3 className='text-[0.8vw] font-[600]'>45 River Road, Hamburg, 20095</h3>
                    </div>
                    <div className='w-[12vw] h-[3vw]'>
                        <h1 className='text-[1vw] font-[700]'>City Center Spot</h1>
                        <h3 className='text-[0.7vw] font-[600]'>78 Market Square, Munich, 80331</h3>
                    </div>
                    
                </div>
            </div>
        </div>
  )
}

export default Main