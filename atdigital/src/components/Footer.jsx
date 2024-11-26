import React from "react";

const Footer = () => {
  return (
    <div className="bg-purple-700 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 mb-10">
        {/* First Section */}
        <div
          className="space-y-4"
          style={{
            maxWidth: "413px",
          }}
        >
          <h4 className="text-xl font-bold">AT DIGITAL</h4>
          <p>
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>

        {/* Second Section */}
        <div
          className="space-y-2"
          style={{
            maxWidth: "197px",
          }}
        >
          <h5 className="font-semibold">Our Technologies</h5>
          <ul className="flex flex-col gap-3">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>

        {/* Third Section */}
        <div
          className="space-y-2"
          style={{
            maxWidth: "197px",
          }}
        >
          <h5 className="font-semibold">Our Services</h5>
          <ul className="flex flex-col gap-3">
            <li>Social media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {/* Horizontal Line */}
        <div
          className="my-6"
          style={{
            width: "630px",
            height: "0px",
            borderTop: "1px solid rgba(255, 255, 255, 1)",
            opacity: "0.5",
            margin: "0 auto",
          }}
        ></div>

        {/* Privacy Policy and Terms & Conditions Section */}
        <div className="flex justify-center gap-10 items-center">
          <div className="text-white text-sm">Privacy Policy</div>
          <div
            className="h-full w-0.5 bg-white opacity-50"
            style={{ height: "20px" }}
          ></div>
          <div className="text-white text-sm">Terms & Conditions</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
