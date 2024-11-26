import React, { useState } from "react";
import logo from "../asserts/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="bg-[#6B3CC9] flex justify-between items-center px-6 py-4 md:px-12 md:py-6"
      style={{ height: "77px" }}
    >
      {/* Left Section: Logo */}
      <div>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "238.89px", height: "25px" }}
          className="opacity-100"
        />
      </div>

      {/* Hamburger Menu Button for small screens */}
      <button
        className="text-white text-2xl md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Right Section: Menu Items */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-[77px] left-0 w-full bg-[#6B3CC9] z-10 md:flex md:static md:w-auto md:bg-transparent md:gap-8`}
      >
        <a
          href="#services"
          className="block text-white text-sm px-4 py-2 md:inline md:px-0 md:py-0 hover:underline"
        >
          Services
        </a>
        <a
          href="#about"
          className="block text-white text-sm px-4 py-2 md:inline md:px-0 md:py-0 hover:underline"
        >
          About Us
        </a>
        <a
          href="#contact"
          className="block text-white text-sm px-4 py-2 md:inline md:px-0 md:py-0 hover:underline"
        >
          Contact Us
        </a>
        <a
          href="#careers"
          className="block text-white text-sm px-4 py-2 md:inline md:px-0 md:py-0 hover:underline"
        >
          Careers
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
