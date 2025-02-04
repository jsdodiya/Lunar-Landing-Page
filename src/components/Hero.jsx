import React from "react";

import { IoPlay } from "react-icons/io5";
import { delay, motion } from "framer-motion";

const Hero = () => {

    const textVariant = {
        hidden:{opacity:0, x: -100},
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:1.0,
                ease: "easeInOut",
            }
        }
    }


    const buttonVariant = {
        hidden:{opacity:0},
        visible:{
            opacity:1,
            transition:{
                delay: 0.5,
                duration: 1.0,
            }
        }
    }

    const imageVariant = {
        hidden:{opacity:0, x: 50},
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:1.0,
                ease: "easeInOut",
            }
        }
    }

  return (
    <div className="w-4/5 py-20 m-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
      <div className="md:w-1/2 space-y-6">
        <motion.p initial="hidden" whileInView="visible" viewport={{amount:0.8}} variants={textVariant} >___ Innovation Requires Courages</motion.p>
        <motion.h1 initial="hidden" whileInView="visible" viewport={{amount:0.8}} variants={textVariant} className="text-5xl md:text-7xl font-bold">
          Being Innovatores Requiares Courage
        </motion.h1>
        <motion.p initial="hidden" whileInView="visible" viewport={{amount:0.8}} variants={textVariant} className="md:text-lg">
          Understanding your capacity for risk can guide your business into
          untapped opportuinities, helping you navigate growth
        </motion.p>
        <div className="flex space-x-5">
          <motion.button initial="hidden" whileInView="visible" viewport={{amount:0.8}} variants={buttonVariant} className="px-5 py-3 rounded-full font-semibold bg-black text-white">
            Book
          </motion.button>
          <motion.button initial="hidden" whileInView="visible" viewport={{amount:0.8}} variants={buttonVariant} className="flex space-x-4 items-center">
            {" "}
            <span className="w-8 h-8 flex justify-center items-center bg-black text-white rounded-full ">
              {" "}
              <IoPlay />{" "}
            </span>{" "}
            <span>Watch Video</span>
          </motion.button>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <motion.img 
        initial="hidden" 
        whileInView="visible" 
        viewport={{amount:0.8}} 
        variants={imageVariant}
          src="/hero.jpg"
          alt="Card Image"
          className="w-full h-70 object-cover rounded-full shadow-md "
        />
      </div>
    </div>
  );
};

export default Hero;
