import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img className="w-[100px]" src={Logo} alt="Logo" />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`absolute md:relative  left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-gray-800 font-semibold text-lg">
              <li><a href="#home" className="hover:text-red-500">Home</a></li>
              <li><a href="#about" className="hover:text-red-500">About</a></li>
              <li><a href="#services" className="hover:text-red-500">Services</a></li>
              <li><a href="#blog" className="hover:text-red-500">Blog</a></li>
              <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
            </ul>

        </nav>
      </div>
    </header>
  );
};

export default Header;