import React from 'react'
import img3 from '/src/assets/imgs/img3.png'
import star from '/src/assets/imgs/star.png'
import like from '/src/assets/imgs/like.png'

function Gifts() {
  const Gifts = [
    {
      place_name: "Royal Mithai",
      img: '/src/assets/imgs/s1.png',
      img_name: "Mithai",
      rating_star_img: '/src/assets/imgs/star.png',
      like_img: '/src/assets/imgs/like.png',
      add_to_cart_button: "Add Cart"
    },
    {
      place_name: "Sweet Delight",
      img: "/src/assets/imgs/s6.jpg",
      img_name: "Cake Rusk",
      rating_star_img: '/src/assets/imgs/star.png',
      like_img: '/src/assets/imgs/like.png',
      add_to_cart_button: "Add Cart"
    },
    {
      place_name: "Dessert Hub",
      img: '/src/assets/imgs/s5.jpg',
      img_name: "Biscuits",
      rating_star_img: '/src/assets/imgs/star.png',
      like_img: '/src/assets/imgs/like.png',
      add_to_cart_button: "Add Cart"
    },
    {
      place_name: "Heavenly Sweets",
      img: '/src/assets/imgs/s4.jpg',
      img_name: "Cream Roll",
      rating_star_img: '/src/assets/imgs/star.png',
      like_img: '/src/assets/imgs/like.png',
      add_to_cart_button: "Add Cart"
    },
    {
      place_name: "Candy Corner",
      img: '/src/assets/imgs/s2.jpg',
      img_name: "Choco Cake",
      rating_star_img: '/src/assets/imgs/star.png',
      like_img: '/src/assets/imgs/like.png',
      add_to_cart_button: "Add Cart"
    },
    {
      place_name: "Sweet world",
      img: '/src/assets/imgs/s3.jpg',
      img_name: "Laziza Kheer",
      rating_star_img: '/src/assets/imgs/star.png',
      like_img: '/src/assets/imgs/like.png',
      add_to_cart_button: "Add Cart"
    }
  ]
  return (
    <div className='flex flex-col w-[100vw] h-[30vw] relative gap-[2vw] top-[10vw]'>
      <div className='w-[100vw] relative text-center h-[6vw]'>
        <h1 className='text-[4vw] font-[700] '>Featured Gifts</h1>
    </div>
    <div className='flex flex-row w-[100vw] gap-[1.6vw] h-[22vw]'>
            {Gifts.map((item, index) =>(
              <div className='w-[15vw] h-[19vw] gap-[0.3vw] rounded-md border border-gray-400 flex-col flex'>
              <img className='h-[12vw]' src={item.img} alt="" />
              <div className='flex flex-col w-[15vw] h-[4vw]'>
                <h1 className='text-[1.3vw] font-[500]'>{item.place_name}</h1>
                <h3 className='text-[1vw] font-[400]'>{item.img_name}</h3>
              </div>
              <div className='flex flex-row w-[15vw] pt-[0.5vw] h-[2.2vw]'>
                <img className='w-[7vw] h-[1.3vw]' src={item.rating_star_img} alt="" />
                <img className='w-[1.6vw] h-[0.9vw] relative top-[0.3vw] left-[1vw]' src={item.like_img} alt="" />
                <button className='bg-[#FE912F] w-[4.5vw] h-[1.4vw] rounded-full relative left-[1.4vw] text-[0.8vw]'>{item.add_to_cart_button}</button>
              </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Gifts