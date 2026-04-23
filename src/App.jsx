import React from 'react'
import { motion } from "framer-motion"

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Featured from './Components/Featured'
import Gifts from './Components/Gifts'
import Section from './Components/Section'
import Main from './Components/Main'
import Offer from './Components/Offer'
import bg from '/src/assets/imgs/bg.png'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  // page container animation
  const page = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  }

  // section animation (used globally feel)
  const section = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <motion.div
      variants={page}
      initial="hidden"
      animate="show"
      className="overflow-x-hidden"
    >

      {/* HERO + BG */}
      <div className='relative overflow-hidden'>

        {/* animated background */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='absolute top-0 right-0 w-1/2 h-full bg-no-repeat bg-cover bg-right-top -z-10'
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'right top'
          }}
        />

        <Navbar />

        <motion.div variants={section}>
          <Hero />
        </motion.div>

      </div>

      {/* SECTIONS (staggered feel) */}
      <motion.div variants={section}><Featured /></motion.div>
      <motion.div variants={section}><Gifts /></motion.div>
      <motion.div variants={section}><Section /></motion.div>
      <motion.div variants={section}><Main /></motion.div>
      <motion.div variants={section}><Offer /></motion.div>
      <motion.div variants={section}><Contact /></motion.div>
      <motion.div variants={section}><Footer /></motion.div>

    </motion.div>
  )
}

export default App