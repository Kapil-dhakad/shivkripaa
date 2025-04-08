import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaPinterestP, FaRss } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700 text-sm">
        
        {/* General Inquiries */}
        <div>
          <h3 className="font-semibold text-lg flex items-center">
            <span className="text-red-500 mr-2">|</span> General Inquiries
          </h3>
          <p className="mt-2">+91 735736449 / 6260878596</p>
          <p className="mt-1">shivkripaunhel@gmail.com</p>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold text-lg flex items-center">
            <span className="text-red-500 mr-2">|</span> Address
          </h3>
          <p className="mt-2">
            New delhi, Ujjain road, Unhel, <br />
            unhel-ujjian, Madhya Pradesh-456221
          </p>
        </div>

        {/* Open Time */}
        <div>
          <h3 className="font-semibold text-lg flex items-center">
            <span className="text-red-500 mr-2">|</span> Opentime
          </h3>
          <p className="mt-2">8:00 a.m. - 11:30 a.m.</p>
          <p>2:00 p.m. - 5:30 p.m.</p>
          
        </div>

        {/* Newsletter & Social Media */}
        <div>
          <h3 className="font-semibold text-lg flex items-center">
            <span className="text-red-500 mr-2">|</span> Get Your Free Weekly Tips!
          </h3>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <div className="flex space-x-3 mt-4">
            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-red-500 hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-red-500 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-red-500 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-red-500 hover:text-white transition">
              <FaPinterestP />
            </a>
            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-red-500 hover:text-white transition">
              <FaRss />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-red-500 text-white text-center py-3 mt-6">
        © Copyright - Mahasivanadi - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer