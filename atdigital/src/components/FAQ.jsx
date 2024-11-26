import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import icons

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx); // Toggle open/close
  };

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-[rgba(107,60,201,1)] mb-8">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          {[
            {
              question: "What is FAQ 1?",
              answer: "Here is the answer to FAQ 1.",
            },
            {
              question: "What is FAQ 2?",
              answer: "Here is the answer to FAQ 2.",
            },
            {
              question: "What is FAQ 3?",
              answer: "Here is the answer to FAQ 3.",
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="p-4 bg-[rgba(250,248,255,1)] w-[70%] mx-auto cursor-pointer"
            >
              <div
                className="flex justify-between items-center font-semibold text-gray-700"
                onClick={() => toggleFAQ(idx)}
              >
                <span className="text-[rgba(107,60,201,1)]">
                  {faq.question}
                </span>
                <span className="ml-2 text-xl ">
                  {openIdx === idx ? <FaMinus /> : <FaPlus />}{" "}
                  {/* Toggle icon */}
                </span>
              </div>
              {openIdx === idx && (
                <p className="mt-2 text-gray-600 text-[rgba(111,108,144,1)]">
                  {faq.answer}
                </p> // Conditional content
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
