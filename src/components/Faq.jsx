import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Faq = () => {
  const [selected, setSelected] = useState(null);
  const faqRef = useRef(null);
  const isInView = useInView(faqRef, { margin: "0px 0px -100px 0px", once: false });

  const faqData = [
    {
      question: "What services does your company provide?",
      answer:
        "We specialize in cloud computing, AI-driven solutions, software development, and IT consultancy services for businesses of all sizes.",
    },
    {
      question: "How can I get started with your services?",
      answer:
        "You can schedule a consultation through our website, where our team will help you identify the right solutions for your business needs.",
    },
    {
      question: "Do you offer support and maintenance for your solutions?",
      answer:
        "Yes, we provide 24/7 support and regular maintenance for all our products and services to ensure optimal performance.",
    },
    {
      question: "What industries do you cater to?",
      answer:
        "We serve various industries, including healthcare, finance, retail, and education, with customized tech solutions for each sector.",
    },
  ];

  const toggle = (index) => {
    setSelected(selected === index ? null : index);
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-4/5 mx-auto py-12" ref={faqRef}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-gray-300 rounded-lg p-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <motion.span
                  animate={{ rotate: selected === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </div>
              {selected === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Faq;
