import React from "react";
import workspace from "../asserts/workspace.png";
const Hero = () => {
  return (
    <div className="relative bg-gray-100 h-screen">
      <div className="absolute inset-0">
        <img
          src={workspace} // Replace with the actual hero image URL
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 space-y-6 lg:space-y-0 mt-auto">
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-8 rounded-lg max-w-md lg:ml-10 ">
          <h2 className="text-3xl font-bold mb-4">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 mt-4 font-semibold rounded-lg">
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
