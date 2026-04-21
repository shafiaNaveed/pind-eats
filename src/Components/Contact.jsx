import React from 'react'
import image from '/src/assets/imgs/image.png'
import eng from '/src/assets/imgs/eng.png'
import NY from '/src/assets/imgs/NY.png'
import Miami from '/src/assets/imgs/Miami.png'
import Chicago from '/src/assets/imgs/Chicago.png'
import LosAngle from '/src/assets/imgs/LosAngle.png'
import { FaClock, FaMapLocation, FaMessage, FaPhone } from 'react-icons/fa6'
import { MdAddLocation, MdMail, MdMessage, MdTimer } from 'react-icons/md'

function Contact() {
  return (
    <div className='w-[100vw] h-[70vw] flex flex-col justify-center items-center bg-[#FF9130] relative top-[30vw]'>
        <div className='w-[85vw] relative bottom-[5vw] flex flex-row gap-[5vw] h-[37vw]'>
          <div className='w-[23vw] flex flex-col h-[37vw]'>
            <div className='w-[23vw] h-[17vw]'>
              <img  src={image} alt="" />
            </div>
              <div className='w-[23vw] flex flex-col pt-[4vw] pl-[2vw] h-[22vw] gap-[0.6vw] rounded-[1vw] bg-[#ffd5a6]'>
              <h1 className='text-[1.4vw] font-[500]'>Contact Detail</h1>
              <h2 className='text-[1.4vw]  font-[500]'>Friday</h2>
              <div className='flex flex-row] gap-[0.3vw]'>
                <MdAddLocation className='h-[1.7vw]'/>
                <p className='text-[1vw] font-[500]'>Lakeview Colony, Block C, Pind Town</p>
              </div>
              <div className='flex flex-row gap-[0.3vw]'>
                <FaPhone  className='h-[1.7vw]'/>
                <p className='text-[1vw] font-[500]'>Lakeview Colony, Block C, Pind Town</p>
              </div>
              <div className='flex flex-row gap-[0.3vw]'>
                <MdMail  className='h-[1.7vw]'/>
                <p className='text-[1vw] font-[500]'>support@pindeats.com</p>
              </div>
              <div className='flex flex-row gap-[0.3vw]'>
                <FaClock  className='h-[1.7vw]'/>
                <p className='text-[1vw] font-[500]'>Mon-sum  12:00Pm-12:00Am</p>
              </div>
            </div>
          </div>
          <div className='w-[60vw] h-[37vw]  flex flex-col gap-[2vw]'>
            <div className='flex flex-col pl-[17vw]'>
              <h1 className='text-[1.5vw] font-[400] relative left-[8vw] leading-[100%] tracking-[2%]'>Contact Us</h1>
              <h1 className='text-[2.5vw] font-[700] leading-[100%] tracking-[0%]'>Get In Touch With Us!</h1>
            </div>
            <div className='flex flex-row w-[60vw] h-[5vw] gap-[1.8vw]'>
              <div className='flex flex-col w-[29vw] h-[5vw]'>
                <lable className='text-[1.3vw] text-white font-[500]'>First Name</lable>
                <input className='h-[3vw] rounded-[0.3vw] p-[1vw] text-[1.3vw] placeholder-[black] font-[500] bg-[#ffd5a6]' type="text" placeholder='John' />
              </div>
              <div className='flex flex-col w-[29vw] h-[5vw]'>
                <lable className='text-[1.3vw] text-white font-[500]'>Last Name</lable>
                <input className='h-[3vw] rounded-[0.3vw] p-[1vw] text-[1.3vw] placeholder-[black] font-[500] bg-[#ffd5a6]' type="text" placeholder='Adus' />
              </div>
            </div>
            <div className='flex flex-row w-[60vw] h-[5vw] gap-[1.8vw]'>
              <div className='flex flex-col w-[29vw] h-[5vw]'>
                <lable className='text-[1.3vw] text-white font-[500]'>Email</lable>
                <input className='h-[3vw] rounded-[0.3vw] p-[1vw] text-[1.3vw] placeholder-[black] font-[500] bg-[#ffd5a6]' type="text" placeholder='jhonadus@gmail.com' />
              </div>
              <div className='flex flex-col w-[29vw] h-[5vw]'>
                <lable className='text-[1.3vw] text-white font-[500]'>Phone Number</lable>
                  <input className='h-[3vw] rounded-[0.3vw] text-[1.3vw] p-[1vw] placeholder-[black] w-[29vw] font-[500] bg-[#ffd5a6]' type="text" placeholder='+0123 456 7890' />
              </div>
            </div>
            <div className='flex flex-col w-[60vw] h-[12vw]'>
                <lable className='text-[1.3vw] text-white font-[500]'>Message</lable>
                  <input className='h-[10vw] rounded-[0.3vw] text-[1.3vw] placeholder-[black] w-[60vw] font-[500] bg-[#ffd5a6]' type="text" placeholder='Write your message' />
              </div>
              <button className='bg-black w-[60vw] h-[7vw] rounded-[0.4vw] text-[1.3vw] text-[#FF9130]'>Send Message</button>
          </div>
        </div>
        <hr className='w-[88vw] h-[1vw] relative top-[2vw] left-[1.5vw]'/>
        <div className='flex flex-row gap-[2.5vw] relative top-[3vw] left-[2vw]'>
          <div className='w-[20vw] h-[10vw]'>
            <img src={NY} alt="" />
          </div>
          <div className='w-[20vw] h-[10vw]'>
            <img src={LosAngle} alt="" />
          </div>
          <div className='w-[20vw] h-[10vw]'>
            <img src={Chicago} alt="" />
          </div>
          <div className='w-[20vw] h-[10vw]'>
            <img src={Miami} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Contact