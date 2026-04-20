import React from 'react'
import img4 from '/src/assets/imgs/img4.png'
import img5 from '/src/assets/imgs/img5.png'
import img6 from '/src/assets/imgs/img6.png'
import img7 from '/src/assets/imgs/img7.png'
import vector from '/src/assets/imgs/v.png'
import chef2 from '/src/assets/imgs/chef.png'
import chef1 from '/src/assets/imgs/chef1.png'
import clock from '/src/assets/imgs/clock.png'
import profile from '/src/assets/imgs/profile.png'
import food from '/src/assets/imgs/food.png'

function Section() {
  return (
    <div>
       <div className='w-[50vw] flex flex-col h-[40vw] items-center relative top-[15vw] left-[29vw]'>
      <div className='w-[48vw] h-[33vw] flex flex-col items-center gap-[3vw]'>
        <div className='w-[40vw] h-[9vw]'>
          <h1 className='w-[40vw] h-[5vw] text-[3vw] font-[600]'>Ready To Start Your Journey?</h1>
          <h2 className='w-[40vw] h-[4vw] text-[1.2vw] text-center font-[400]'>Join thousands of successful vendors and turn your passion into profit. Choose your path and start earning today!</h2>
        </div>
        <div className='w-[40vw] h-[21vw] gap-[2vw] flex flex-row'>
          <div className='w-[20vw] flex flex-col p-[0.5vw] h-[21vw] border border-gray-400 rounded-lg'>
            <div className='w-[19vw] h-[8vw] flex flex-col gap-[0.5vw]'>
              <div className='w-[4vw] h-[4vw] p-[1vw] relative left-[7vw] bg-[#FF91304D] rounded-[60px]'>
                 <img className='w-[2vw] h-[2vw]' src={img4} alt="" />
              </div>
              <div className='w-[19vw] h-[4vw] text-center'>
                <h1 className='w-[20vw] h-[2vw] text-[1.5vw] font-[500]'>Food Vender</h1>
                <h2 className='w-[19vw] h-[2vw] text-[0.9vw] font-[500]'>Share your culinary creations with food lovers</h2>
              </div>
              <div className='w-[19vw] flex flex-col gap-[0.6vw] h-[20vw]'>
                <div className='w-[13vw] flex flex-row gap-[0.3vw] h-[2.4vw]'>
                  <img className='w-[2vw] h-[2vw]' src={img5} alt="" />
                  <h3 className='h-[1vw] w-[19vw] text-[0.9vw]'>Earn up to $5,000/month</h3>
                </div>
                <div className='w-[13vw] flex flex-row gap-[0.5vw] h-[2.4vw] '>
                  <img className='w-[2vw] h-[2vw]' src={profile} alt="" />
                  <h3 className='h-[1vw] w-[20vw] text-[0.8vw]'>Reach 50k+ hungry customer</h3>
                </div>
                <div className='w-[13vw] flex flex-row gap-[0.5vw] h-[2.4vw]'>
                  <img className='w-[2vw] h-[2vw]' src={clock} alt="" />
                  <h3 className='h-[1vw] w-[19vw] text-[0.9vw]'>Flexible working hours</h3>
                </div>
                <button className='w-[12vw] gap-[1vw] text-[1.2vw] rounded-full flex text-white h-[2vw] bg-[#FE912F]'> <img className='w-[1.4vw] h-[1.4vw] relative left-[0.2vw] top-[0.2vw]' src={img6} alt="" />Most Popular</button>
            </div>
            </div>
          </div>
          <div className='w-[20vw] flex flex-col p-[0.5vw] h-[21vw] border border-gray-400 rounded-lg'>
            <div className='w-[19vw] h-[8vw] flex flex-col gap-[0.5vw]'>
              <div className='w-[4vw] h-[4vw] p-[1vw] relative left-[7vw] bg-[#FF91304D] rounded-[60px]'>
                 <img className='w-[2vw] h-[2vw]' src={img4} alt="" />
              </div>
              <div className='w-[19vw] h-[4vw] text-center'>
                <h1 className='w-[20vw] h-[2vw] text-[1.5vw] font-[500]'>Food Vender</h1>
                <h2 className='w-[19vw] h-[2vw] text-[0.9vw] font-[500]'>Share your culinary creations with food lovers</h2>
              </div>
              <div className='w-[19vw] flex flex-col gap-[0.6vw] h-[20vw]'>
                <div className='w-[13vw] flex flex-row gap-[0.3vw] h-[2.4vw]'>
                  <img className='w-[2vw] h-[2vw]' src={img5} alt="" />
                  <h3 className='h-[1vw] w-[19vw] text-[0.9vw]'>Earn up to $5,000/month</h3>
                </div>
                <div className='w-[13vw] flex flex-row gap-[0.5vw] h-[2.4vw]'>
                  <img className='w-[2vw] h-[2vw]' src={profile} alt="" />
                  <h3 className='h-[1vw] w-[20vw] text-[0.8vw]'>Reach 50k+ hungry customer</h3>
                </div>
                <div className='w-[13vw] flex flex-row gap-[0.5vw] h-[2.4vw]'>
                  <img className='w-[2vw] h-[2vw]' src={clock} alt="" />
                  <h3 className='h-[1vw] w-[19vw] text-[0.9vw]'>Flexible working hours</h3>
                </div>
                <button className='w-[12vw] gap-[1.2vw] rounded-full text-[1.2vw] flex text-white h-[2vw] bg-[#CA0000]'> <img className='w-[1.2vw] h-[1.2vw] relative left-[0.4vw] top-[0.2vw]' src={img7} alt="" />High Margins</button>
            </div>
            </div>
          </div>
        </div>
        <div className='w-[32vw] gap-[3vw] flex flex-row rounded-md'>
          <button className='w-[19vw] flex h-[3vw] p-[0.7vw] bg-[#FE912F] text-[1.4vw] text-start rounded-md text-white'>Start as Food Vendor <img className='w-[2.4vw] h-[1.3vw] relative left-[1vw] top-[0.3vw]' src={vector} alt="" /></button>
          <button className='w-[10vw] flex h-[3vw] border-2 border-gray-700 text-[1.4vw] font-[700] items-center justify-center rounded-md text-gray-800'>Learn More</button>
            </div>
      </div>
    </div>
    <div className='w-[94vw] h-[28vw] bg-[#FE912F] flex flex-row p-[4vw] gap-[7vw] rounded-[16px] relative top-[18vw] left-[3vw]'>
        <img className='w-[6vw] h-[7vw]' src={chef1} alt="" />
        <img className='w-[20vw] h-[21vw]' src={food} alt="" />
        <div className='w-[30vw] flex flex-col h-[23vw] gap-[0.5vw]'>
          <h2 className='text-[2vw] font-[500]'>About us</h2>
          <h1 className='text-[2.2vw] font-[600] text-white'>Passion for Great Food, Served with Love</h1>
          <p className='text-[1.1vw] font-[500] text-white'>At PindEats, we bring you the finest flavors inspired by
[cuisine type], crafted with high-quality ingredients, 
tranditional recipes, and a passion for excellent service.
Whether you’re craving [signature dishes] or seeking a
cozy spot to enjoy with loved ones, we’ve got you covered.
Welcome to a place where food where food meets passion!</p>
        </div>
        <img className='w-[12vw] h-[10vw] relative top-[9vw] left-[2vw]' src={chef2} alt="" />
      </div>
    </div>
    
  )
}

export default Section