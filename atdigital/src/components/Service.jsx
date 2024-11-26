import React from "react";
import image1 from "../asserts/image 1.png";
import image2 from "../asserts/image 2.png";
const Services = () => {
  return (
    <div className="container mx-auto px-4 py-20 space-y-12">
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
        <div className="w-1/2">
          <img src={image2} alt="Web and Mobile" className="w-full" />
        </div>
        <div className="w-1/2">
          <h3 className="text-2xl font-bold text-purple-700 mb-4">
            Web & Mobile App Development
          </h3>
          <p className="text-gray-600">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents.
          </p>
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-10">
        <div className="w-1/2">
          <img src={image1} alt="Digital Strategy" className="w-full" />
        </div>
        <div className="w-1/2">
          <h3 className="text-2xl font-bold text-purple-700 mb-4">
            Digital Strategy Consulting
          </h3>
          <p className="text-gray-600">
            We provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
