import { easeInOut, motion } from "framer-motion";
import React from "react";
import { SiDatabricks, SiGoogleassistant } from "react-icons/si";

const Insights = () => {
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };

  const insightsData = [
    {
      title: "Productivity Enhancer",
      date: "July 2025",
      icon: SiGoogleassistant,
      description: "Dynamic visibility tools built to drive engagement",
    },
    {
      title: "Remote Assistance",
      date: "Oct 2025",
      icon: SiDatabricks,
      description:
        "Professional support for teams operating from remote locations",
    },
  ];

  return (
    <div className="w-4/5 m-auto py-18 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
      <div className="md:w-1/3 space-y-4">
        <motion.h2
        initial="hidden" whileInView="visible" variants={cardVariant} viewport={{amount: 0.5}}
        className="text-2xl font-bold" >
          Industry Insights
        </motion.h2>
        <motion.p
initial="hidden" whileInView="visible" variants={cardVariant} viewport={{amount: 0.5}}>
          The technology industry is driven by AI innovation, hybrid cloud
          adoption, and a strong focus on cybersecurity with zero-trust models
          to combat rising threats.
        </motion.p>
        <div className="flex items-center space-x-2">
          <img
            src="/men.png"
            alt=""
            className="w-12 h-12 rounded-full border-4"
          />
          <div>
            <h1 className="font-bold text-lg">Michel Runner</h1>
            <p className="text-sm text-black">CEO, Founder</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col md:flex-row md:space-x-4 md:space-y-0">
        {insightsData.map((insights, index) => (
          <motion.div
          initial="hidden" whileInView="visible" variants={cardVariant} viewport={{amount: 0.5}}
            custom={index}
            className="flex flex-col w-full md:flex-1 p-4 border-4 border-black/75 rounded-xl space-y-4"
            key={index}
          >
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <button className="p-3 rounded-full bg-violet-300 text-violet-800">
                  {React.createElement(insights.icon)}
                </button>
                <h1 className="text-xl font-bold">{insights.title}</h1>
              </div>
              <p>{insights.date}</p>
            </div>
            <p className="text-lg leading-loose">{insights.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
