import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      ref={ref}
      className="bg-gray-900 text-white py-6 px-4"
      variants={footerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Section */}
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-lg font-bold">Lunar Tech Company</h3>
          <p>
            Pioneering innovative solutions in technology, redefining the
            boundaries of innovation for a better future.
          </p>
        </div>

        {/* Right Section */}
        <div className="space-y-2 text-center md:text-right">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <p>Email: contact@lunartech.com</p>
          <p>Phone: +1 800 123 4567</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          Developed by <span className="font-bold">Jinendra Pal Dodiya</span>. All rights reserved © {new Date().getFullYear()}.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
