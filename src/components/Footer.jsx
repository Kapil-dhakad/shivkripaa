import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaRss,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-700 text-sm">
        
        {/* General Inquiries */}
        <div>
          <h3 className="font-semibold text-lg flex items-center">
            <span className="text-red-500 mr-2">|</span> General Inquiries
          </h3>
          <p className="mt-2">+91 735736449 / 6260878596</p>
          <p className="mt-1 break-words">shivkripaunhel@gmail.com</p>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold text-lg flex items-center">
            <span className="text-red-500 mr-2">|</span> Address
          </h3>
          <p className="mt-2 leading-relaxed">
            New Delhi, Ujjain Road, Unhel, <br />
            Unhel-Ujjain, Madhya Pradesh - 456221
          </p>
        </div>

        {/* Open Time */}
        <div>
          <h3 className="font-semibold text-lg flex items-center">
            <span className="text-red-500 mr-2">|</span> Open Time
          </h3>
          <p className="mt-2">8:00 a.m. - 11:30 a.m.</p>
          <p>2:00 p.m. - 5:30 p.m.</p>
        </div>

        {/* Newsletter & Social Icons */}
        <div>
          <h3 className="font-semibold text-lg flex items-center">
            <span className="text-red-500 mr-2">|</span> Get Weekly Tips!
          </h3>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <div className="flex flex-wrap gap-3 mt-4">
            {[FaTwitter, FaFacebookF, FaInstagram, FaPinterestP, FaRss].map(
              (Icon, idx) => (
                <a
                  href="#"
                  key={idx}
                  className="p-2 bg-gray-200 rounded-full hover:bg-red-500 hover:text-white transition"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-red-500 text-white text-center py-3 mt-8 text-sm sm:text-base">
        © Copyright - Mahasivanadi - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
