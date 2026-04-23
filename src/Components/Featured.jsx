import React from 'react'
import { motion } from "framer-motion"

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
    { place_name: "Spice Garden", img: mac, img_name: "Maccroni", rating_star_img: star, like_img: like, add_to_cart_button: "Add Cart" },
    { place_name: "Burger Town", img: burger, img_name: "Burger", rating_star_img: star, like_img: like, add_to_cart_button: "Add Cart" },
    { place_name: "The Italian Place", img: img2, img_name: "Shawarma", rating_star_img: star, like_img: like, add_to_cart_button: "Add Cart" },
    { place_name: "Sandwich Hub", img: sandwich, img_name: "Sandwich", rating_star_img: star, like_img: like, add_to_cart_button: "Add Cart" },
    { place_name: "Spicy Town", img: wings, img_name: "Hot Wings", rating_star_img: star, like_img: like, add_to_cart_button: "Add Cart" },
    { place_name: "Sushi World", img: pasta, img_name: "Pasta", rating_star_img: star, like_img: like, add_to_cart_button: "Add Cart" }
  ]

  // container (stagger effect)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18
      }
    }
  }

  // card animation (scroll reveal)
  const card = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className='flex flex-col w-[100vw] gap-[2vw] mt-[7vw]'>

      {/* Heading animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-center'
      >
        <h1 className='text-[4vw] font-[700]'>
          Featured Restaurants
        </h1>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className='flex flex-row w-[100vw] gap-[1.6vw]'
      >

        {featured.map((item, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ scale: 1.06 }}
            className='w-[15vw] h-[22vw] rounded-[0.4vw] border border-gray-400 flex flex-col cursor-pointer'
          >

            <motion.img
              whileHover={{ scale: 1.05 }}
              className='rounded-[0.4vw]'
              src={item.img}
              alt=""
            />

            <div className='flex flex-col w-[15vw] h-[4vw]'>
              <h1 className='text-[1.3vw] font-[500]'>{item.place_name}</h1>
              <h3 className='text-[1vw] font-[400]'>{item.img_name}</h3>
            </div>

            <div className='flex flex-row w-[15vw] pt-[0.5vw] h-[2.2vw]'>

              <img className='w-[7vw] h-[1.3vw]' src={item.rating_star_img} alt="" />

              <motion.img
                whileTap={{ scale: 0.8 }}
                className='w-[1.6vw] h-[0.9vw] relative top-[0.3vw] left-[1vw]'
                src={item.like_img}
                alt=""
              />

              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className='bg-[#FE912F] w-[4.5vw] h-[1.4vw] rounded-full relative left-[1.4vw] text-[0.8vw]'
              >
                {item.add_to_cart_button}
              </motion.button>

            </div>

          </motion.div>
        ))}

      </motion.div>
    </div>
  )
}

export default Featured