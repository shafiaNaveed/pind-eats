import React from 'react'
import logo from '/src/assets/imgs/logo.png'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { FaArrowCircleUp } from 'react-icons/fa'

function Footer() {
  return (
    <div className='w-[100vw] h-[22vw] flex flex-row p-[3vw] gap-[16vw] relative top-[42vw]'>
        <div className='flex flex-col gap-[2vw] w-[20vw] h-[18vw]'>
            <div className='flex flex-row gap-[2vw]'>
                <img className='w-[4vw] h-[4vw]' src={logo} alt="" />
                <h1 className='w-[10vw] h-[4vw] text-[2vw] relative right-[1.4vw] top-[0.3vw] font-[600]' >PindEats</h1>
            </div>
            <h1 className='text-[1.1vw] w-[14vw]'>There are many variation of passages of lorem ipsum available but the</h1>
            <h2 className='text-[1.1vw] font-[500]'>Follow Us</h2>
            <div className='flex relative bottom-[1.5vw] gap-[0.3vw]'>
                <FaInstagram className='h-[1.7vw]'/>
                <FaFacebook className='h-[1.7vw]'/>
                <FaGoogle className='h-[1.7vw]'/>
                <FaLinkedin className='h-[1.7vw]'/>
            </div>
        </div>
        <div className='flex flex-row w-[44vw] gap-[6vw] h-[17vw]'>
            <div className='flex flex-col gap-[1.7vw]'>
                <h1 className='text-[1.3vw] font-[700]'>Pages</h1>
                <h1 className='text-[1.3vw] font-[400]'>Home</h1>
                <h1 className='text-[1.3vw] font-[400]'>Food</h1>
                <h1 className='text-[1.3vw] font-[400]'>Gifts</h1>
                <h1 className='text-[1.3vw] font-[400]'>Properties</h1>
            </div>
            <div className='flex flex-col gap-[1.7vw]'>
                <h1 className='text-[1.3vw] font-[700]'>Products</h1>
                <h1 className='text-[1.3vw] font-[400]'>Gifts</h1>
                <h1 className='text-[1.3vw] font-[400]'>Fast Foods</h1>
                <h1 className='text-[1.3vw] font-[400]'>Properties</h1>
            </div>
            <div className='flex flex-col w-[26vw]'>
                <h1 className='text-[1.8vw] leading-[100%] tracking-[2%] w-[22vw] relative top-[8vw] font-[700]'>Subscribe for exclusive deals and updates</h1>
                <div className=' w-[26vw] h-[3vw] flex flex-row relative top-[9vw] gap-[1.2vw]'>
                    <input className='w-[15vw] pl-[1vw] placeholder-[white] rounded-[0.4vw] bg-black text-[1.2vw]' type="text" placeholder='Enter your e-mail' />
                    <button className='w-[9vw] text-[1.2vw] rounded-[0.4vw] text-start pl-[1vw] text-white bg-[#FE912F]'>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer