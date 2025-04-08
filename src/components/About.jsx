import React from 'react';
import Offer2Img from "../assets/offer2.jpeg";

const About = () => {
  return (
    <section className="bg-[#FCE9D1] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          India's Best and Fast Network Airtel
        </h2>
        <hr className="w-16 mx-auto border-gray-600 mt-2" />

        {/* Description */}
        <p className="text-gray-800 mt-4 text-justify text-base sm:text-lg leading-relaxed">
          Airtel is one of India's leading telecommunications companies, offering seamless
          connectivity through its 4G, 5G, and broadband services. With an Airtel SIM, you get
          high-speed internet, crystal-clear voice calls, and a wide network coverage across
          the country.
        </p>

        {/* Read More Button */}
        <div className="mt-6 text-left">
          <button className="bg-[#de1f1f] text-white py-2 px-6 rounded-md text-base sm:text-lg font-semibold hover:bg-[#cc5200] transition-transform transform hover:scale-105">
            READ MORE
          </button>
        </div>

        {/* Image + Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={Offer2Img}
              alt="Airtel Offer"
              className="rounded-lg shadow-lg hover:shadow-xl transition duration-300 w-full max-w-md"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              "Airtel 5G: The Future of Ultra-Fast Connectivity!" 🚀
            </h3>
            <hr className="w-16 border-gray-600 mt-2 mb-4" />
            <ul className="list-disc list-inside space-y-2 text-gray-800 text-base sm:text-lg">
              <li>✅ Fastest Network</li>
              <li>✅ Affordable Plans</li>
              <li>✅ Nationwide Coverage</li>
              <li>✅ International Roaming</li>
              <li>✅ Exclusive Benefits</li>
              <li>✅ Trusted by 1M+ Customers</li>
            </ul>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-10 text-center text-md font-semibold text-[#cc5200]">
          Available Languages:{" "}
          <span className="text-black">
            English, Tamil, Telugu, Hindi, Malayalam, Kannada
          </span>
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#de1f1f] text-white text-center py-4 mt-6 text-lg font-bold">
          The World’s Fastest Network Centre
        </div>
      </div>
    </section>
  );
};

export default About;
