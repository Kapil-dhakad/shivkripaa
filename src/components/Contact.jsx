import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegCalendarAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#FCE9D1] py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold">Connect Us</h2>
        <hr className="w-16 mx-auto border-gray-600 mt-2 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {/* Address */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 rounded-full p-4 transition-transform transform hover:scale-110 hover:bg-orange-500">
              <FaMapMarkerAlt className="text-red-500 text-3xl hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-semibold mt-3">ADDRESS</h3>
            <p className="text-sm text-gray-700 mt-1">
              Unhel , Ujjian <br />
              New Delhi Ujjain road, Unhel, <br />
              Ujjain, MadhyaPradesh-456221
            </p>
          </div>

          {/* Phone */}
         {/* Phone */}
          <div className="flex flex-col items-center">
            <a
              href="tel:+917357364449"
              className="bg-gray-100 rounded-full p-4 transition-transform transform hover:scale-110 hover:bg-orange-500"
            >
              <FaPhoneAlt className="text-red-500 text-3xl hover:text-white transition-colors duration-300" />
            </a>
            <h3 className="font-semibold mt-3">PHONE</h3>
            <p className="text-sm text-gray-700 mt-1">
              <a href="tel:+917357364449" className="hover:underline">
                +91 7357364449
              </a> / <a href="tel:+916260878596" className="hover:underline">
                6260878596
              </a>
            </p>
          </div>


          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 rounded-full p-4 transition-transform transform hover:scale-110 hover:bg-orange-500">
              <FaEnvelope className="text-red-500 text-3xl hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-semibold mt-3">EMAIL ADDRESS</h3>
            <p className="text-sm text-gray-700 mt-1">
              shivakripaunhel@gmail.com
            </p>
          </div>

          {/* Business Hours */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 rounded-full p-4 transition-transform transform hover:scale-110 hover:bg-orange-500">
              <FaRegCalendarAlt className="text-red-500 text-3xl hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-semibold mt-3">BUSINESS HOURS</h3>
            <p className="text-sm text-gray-700 mt-1">
              Monday/Friday: 10am to 6pm <br />
              Saturday: 10am to 12am
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
