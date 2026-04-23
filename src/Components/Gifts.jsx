import React from 'react'
import { motion } from "framer-motion"

import star from '/src/assets/imgs/star.png'
import like from '/src/assets/imgs/like.png'
import sweet1 from '/src/assets/imgs/s1.png'
import sweet2 from '/src/assets/imgs/s2.jpg'
import sweet3 from '/src/assets/imgs/s3.jpg'
import sweet4 from '/src/assets/imgs/s4.jpg'
import sweet5 from '/src/assets/imgs/s5.jpg'
import sweet6 from '/src/assets/imgs/s6.jpg'

function Gifts() {

  const Gifts = [
    { place_name: "Royal Mithai", img: sweet1, img_name: "Mithai", rating_star_img: star, like_img: like, add_to_cart_button: "Add Cart" },
    { place_name: "Sweet Delight", img: sweet2, img_name: "Cake Rusk", rating_star_img: star, like_img: like, add_to_cart_button: "Add Cart" },
    { place_name: "Dessert Hub", img: sweet3, img_name: "Biscuits", rating_star_img: star, like_img: like, add_to_cart_button: "Add Cart" },
    { place_name: "Heavenly Sweets", img: sweet4, img_name: "Cream Roll", rating_star_img: star, like_img: like, add_to_cart_button: "Add Cart" },
    { place_name: "Candy Corner", img: sweet5, img_name: "Choco Cake", rating_star_img: star, like_img: like, add_to_cart_button: "Add Cart" },
    { place_name: "Sweet world", img: sweet6, img_name: "Laziza Kheer", rating_star_img: star, like_img: like, add_to_cart_button: "Add Cart" }
  ]

  // container (for stagger effect)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  }

  // each card animation
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className='flex flex-col w-[100vw] h-[30vw] relative gap-[2vw] top-[10vw]'>

      {/* Heading animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='w-[100vw] text-center h-[6vw]'
      >
        <h1 className='text-[4vw] font-[700]'>Featured Gifts</h1>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='flex flex-row w-[100vw] gap-[1.6vw] h-[22vw]'
      >
        {Gifts.map((itemData, index) => (
          <motion.div
            key={index}
            variants={item}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.07 }}
            className='w-[15vw] h-[19vw] gap-[0.3vw] rounded-[0.4vw] border border-gray-400 flex-col flex cursor-pointer'
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              className='h-[12vw] rounded-[0.4vw]'
              src={itemData.img}
              alt=""
            />

            <div className='flex flex-col w-[15vw] h-[4vw]'>
              <h1 className='text-[1.3vw] font-[500]'>{itemData.place_name}</h1>
              <h3 className='text-[1vw] font-[400]'>{itemData.img_name}</h3>
            </div>

            <div className='flex flex-row w-[15vw] pt-[0.5vw] h-[2.2vw]'>
              <img className='w-[7vw] h-[1.3vw]' src={itemData.rating_star_img} alt="" />

              <motion.img
                whileTap={{ scale: 0.8 }}
                className='w-[1.6vw] h-[0.9vw] relative top-[0.3vw] left-[1vw]'
                src={itemData.like_img}
                alt=""
              />

              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className='bg-[#FE912F] w-[4.5vw] h-[1.4vw] rounded-full relative left-[1.4vw] text-[0.8vw]'
              >
                {itemData.add_to_cart_button}
              </motion.button>
            </div>

          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Gifts