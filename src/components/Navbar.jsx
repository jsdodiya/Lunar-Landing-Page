import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className='w-4/5 m-auto flex justify-between items-center py-5'>
      <h1 className='text-xl font-bold'>LunarTeach</h1>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, staggerChildren: 0.1 }}
        className='hidden md:flex items-center space-x-8'
      >
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a href="#">Portfolio</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a href="#">Our Teams</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a href="#">Careers</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a href="#">About</a>
        </motion.li>
      </motion.ul>
      
      <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className='px-5 py-2 border border-black hover:bg-violet-400 hover:text-white font-semibold rounded-full'>Register</motion.button>
    </div>
  );
};

export default Navbar;
