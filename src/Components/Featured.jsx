import React from 'react'
import img2 from '/src/assets/imgs/img2.png'
import star from '/src/assets/imgs/star.png'
import like from '/src/assets/imgs/like.png'
import mac from '/src/assets/imgs/mac.jpg'
import sandwich from '/src/assets/imgs/sand.jpg'
import wings from '/src/assets/imgs/wings.jpg'
import burger from '/src/assets/imgs/bur.jpg'
import pasta from '/src/assets/imgs/pasta.jpg'

function Featured() {
  const featured = [
    {
      place_name: "Spice Garden",
      img: mac,
      img_name: "Maccroni",
      rating_star_img: star,
      like_img: like,
      add_to_cart_button: "Add Cart"
    },
    {
      place_name: "Burger Town",
      img: burger,
      img_name: "Burger",
      rating_star_img: star,
      like_img: like,
      add_to_cart_button: "Add Cart"
    },
    {
      place_name: "The Ittilain Place",
      img: img2,
      img_name: "Shawarma",
      rating_star_img: star,
      like_img: like,
      add_to_cart_button: "Add Cart"
    },
    {
      place_name: "Sandwich Hub",
      img: sandwich,
      img_name: "Sandwich",
      rating_star_img: star,
      like_img: like,
      add_to_cart_button: "Add Cart"
    },
    {
      place_name: "Spicy Town",
      img: wings,
      img_name: "Hot Wings",
      rating_star_img: star,
      like_img: like,
      add_to_cart_button: "Add Cart"
    },
    {
      place_name: "Sushi World",
      img: pasta,
      img_name: "Pasta",
      rating_star_img: star,
      like_img: like,
      add_to_cart_button: "Add Cart"
    }
  ]
  return (
    <div className='flex flex-col w-[100vw] h-[30vw] relative gap-[2vw] top-[7vw]'>
      <div className='w-[100vw] relative text-center h-[6vw]'>
        <h1 className='text-[4vw] font-[700] '>Featured Restaurants</h1>
    </div>
    <div className='flex flex-row w-[100vw] gap-[1.6vw] h-[22vw]'>
            {featured.map((item,index)=>(
              <div className='w-[15vw] h-[22vw] gap-[0.3vw] rounded-md border transition-all duration-300 hover:scale-105 border-gray-400 flex-col flex'>
              <img className='rounded-[0.3vw] cursor-pointer' src={item.img} alt="" />
              <div className='flex flex-col w-[15vw] h-[4vw]'>
                <h1 className='text-[1.3vw] font-[500]'>{item.place_name}</h1>
                <h3 className='text-[1vw] font-[400]'>{item.img_name}</h3>
              </div>
              <div className='flex flex-row w-[15vw] pt-[0.5vw] h-[2.2vw]'>
                <img className='w-[7vw] h-[1.3vw]' src={item.rating_star_img} alt="" />
                <img className='w-[1.6vw] h-[0.9vw] relative top-[0.3vw] left-[1vw]' src={item.like_img} alt="" />
                <button className='bg-[#FE912F] active:scale-90 cursor-pointer active:bg-[#ffb778] w-[4.5vw] h-[1.4vw] rounded-full relative left-[1.4vw] text-[0.8vw]'>{item.add_to_cart_button}</button>
              </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Featured