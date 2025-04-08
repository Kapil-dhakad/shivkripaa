import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaRegCalendarAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#FCE9D1] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Connect Us</h2>
        <hr className="w-16 mx-auto border-gray-600 mt-2 mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Address */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 rounded-full p-4 transition-transform transform hover:scale-110 hover:bg-orange-500">
              <FaMapMarkerAlt className="text-red-500 text-3xl hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-semibold mt-3 text-base sm:text-lg">ADDRESS</h3>
            <p className="text-sm text-gray-700 mt-1">
              Unhel, Ujjain <br />
              New Delhi-Ujjain Road, Unhel, <br />
              Ujjain, Madhya Pradesh - 456221
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <a
              href="tel:+917357364449"
              className="bg-gray-100 rounded-full p-4 transition-transform transform hover:scale-110 hover:bg-orange-500"
            >
              <FaPhoneAlt className="text-red-500 text-3xl hover:text-white transition-colors duration-300" />
            </a>
            <h3 className="font-semibold mt-3 text-base sm:text-lg">PHONE</h3>
            <p className="text-sm text-gray-700 mt-1">
              <a href="tel:+917357364449" className="hover:underline">
                +91 7357364449
              </a>{" "}
              /{" "}
              <a href="tel:+916260878596" className="hover:underline">
                6260878596
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 rounded-full p-4 transition-transform transform hover:scale-110 hover:bg-orange-500">
              <FaEnvelope className="text-red-500 text-3xl hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-semibold mt-3 text-base sm:text-lg">
              EMAIL ADDRESS
            </h3>
            <p className="text-sm text-gray-700 mt-1 break-words">
              shivakripaunhel@gmail.com
            </p>
          </div>

          {/* Business Hours */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 rounded-full p-4 transition-transform transform hover:scale-110 hover:bg-orange-500">
              <FaRegCalendarAlt className="text-red-500 text-3xl hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-semibold mt-3 text-base sm:text-lg">
              BUSINESS HOURS
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              Monday - Friday: 10am to 6pm <br />
              Saturday: 10am to 12pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
