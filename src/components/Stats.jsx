import React from 'react'
import { FaChartLine } from 'react-icons/fa'
import {motion} from 'framer-motion'

const Stats = () => {
  const imageVariant = {
    hidden:{opacity:0, x: -80},
    visible:{
        opacity:1,
        x:0,
        transition:{
            delay:0.2,
            duration:1.0,
            ease: "easeInOut",
        }
    }
}
  
  return (
    <div className='py-20 bg-white/50'>
    <div className='w-4/5 m-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0' >
      <div className='w-full md:1/3' >
      <motion.img
      initial="hidden"
      whileInView="visible"
      variants={imageVariant}
      viewport={{amount:0.5}}
      src="/girl1.jpg" alt="" className='w-[85%] rounded-2xl' />
      </div>
      <div className='md:w-1/2 space-y-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>Over 30,000</h1>
        <p className='md:text-4xl font-semibold md:font-bold'>
          {" "}
          Remote professionals provide essential services to businesses
          globally, delivering support from any location.
        </p>
        <div className='flex space-x-3'>
          <div className='space-y-5'>
            <div className='flex items-center space-x-2'>
            <span className='p-3 rounded-full bg-violet-300 text-violet-800'><FaChartLine/></span>
            <h1>Data Validation</h1>
          </div>
          <p>
            {" "}
            Ask your AI-powered asssisant anything. Your virtual comapnion is
            here to help you stay ahead.
          </p>
        </div>

        <div className='space-y-5'>
          <div className='flex items-center space-x-2'>
            <span className='p-3 rounded-full bg-violet-300 text-violet-800'><FaChartLine/></span>
            <h1>Optimize Efficiency</h1>
          </div>
          <p>
            {" "}
            Get expert assistance for technical or performance-related 
            challeneg, all managed remotely.
          </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats