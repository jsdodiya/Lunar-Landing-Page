import { easeInOut, motion } from "framer-motion";
import React from "react";

const Testimonials = () => {
  const testmtvariant = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        easeInOut,
      },
    },
  };
  const testimonialsData = [
    {
      image: "/men.png",
      name: "Michel Renner",
      position: "Founder",
      feedback:
        "Their assistance has streamlined our operations, offering technical expertise and reliable support.",
    },
    {
      image: "/men.png",
      name: "Emily Carter",
      position: "CEO",
      feedback:
        "The solutions provided have greatly enhanced our productivity and operational efficiency.",
    },
    {
      image: "/men.png",
      name: "John Smith",
      position: "Project Manager",
      feedback:
        "Their team delivered exceptional results on time, exceeding our expectations with their innovative approach.",
    },
  ];

  return (
    <div className="py-10 bg-white/50">
      <div className="w-4/5 m-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          variants={testmtvariant}
          className="space-y-5"
        >
          <h1 className="text-center text-lg font-black md:text-2xl">____Client Reviews</h1>
          <h2 className="text-sm md:text-xl md:font-semibold text-center">
            Our clients' trust and satisfaction drive us forward.
            <br />
            Hear from those who have experienced our dedication, expertise, and
            passion for delivering exceptional results.
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4 py-10">
          {testimonialsData.map((testimonial, index) => (
            <motion.div 
            key={index}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{amount:0.5}}
            variants={testmtvariant}
            className="p-5 space-y-5 border border-black rounded-lg flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <img
                  src={testimonial.image}
                  alt=""
                  className="w-16 h-16 rounded-full border-2"
                />
                <div>
                  <h1 className="font-bold text-lg">{testimonial.name}</h1>
                  <p className="text-sm text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className="text-center text-lg">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
