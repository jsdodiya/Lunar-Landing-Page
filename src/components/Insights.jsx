import { div } from "framer-motion/client";
import React from "react";
import { SiDatabricks, SiGoogleassistant } from "react-icons/si";

const Insights = () => {
  const insightsData = [
    {
      title: "Productivity Enhancer",
      date: "July 2023",
      icon: SiGoogleassistant,
      description: "Dyanmic visibility tools built to drive engagement",
    },

    {
      title: "Remote Assistance",
      date: "Oct 2023",
      icon: SiDatabricks,
      description:
        "Professional support for teams operating from remote location",
    },
  ];
  return (
    <div className="w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
      <div className="md:w-1/3 space-y-4">
        <h2 className="text-2xl font-bold">Industry Insights </h2>
        <p>
          The technology industry is driven by AI innovation, hybrid cloud
          adoption, and a strong focus on cybersecurity with zero-trust models
          to combat rising threats.
        </p>
        <div className="flex items-center space-x-2">
          <img src="/men.png" alt="" className="w-12 h-12 rounded-full border-4" />
          <div>
            <h1 className="font-bold text-lg ">Michel Runner </h1>
            <p className="text-sm text-gray-400">CEO, Founder</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col md:flex-row md:space-x-5 md:space-y-0">
        {insightsData.map((insights, index) => (
          <div className="w-full p-4 border-4 border-white/50 rounded-xl space-y-4" key={index}>
            <div>
              <div>
                <button>{insights.icon()}</button>
                <h1>{insights.title}</h1>
              </div>
              <p>{insights.date}</p>
            </div>
            <p>{insights.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
