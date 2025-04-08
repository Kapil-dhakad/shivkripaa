import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import OfferImg from "../assets/offer.jpeg";

// Data for slider
const slides = [
  {
    title: "Airtel 5G in Your City Unhel",
    image: OfferImg,
  },
  {
    title: "Unlock the Secrets of the Stars",
    subtitle: "Learn from Expert Astrologers and Shape Your Destiny.",
    image:
      "https://bhartiyajyotishgiyanvidyapeeth.com/wp-content/uploads/2024/11/2.png",
  },
  {
    title: "Master the Ancient Wisdom",
    subtitle: "Join Our Certified Astrology Programs Today.",
    image:
      "https://bhartiyajyotishgiyanvidyapeeth.com/wp-content/uploads/2024/10/as.avif",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <div className="bg-blue-100 text-blue-800 px-4 py-1 inline-block rounded-full font-semibold text-sm">
            Unhel Airtel Team
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            {slides[currentSlide].title}
          </h2>
          <p className="text-gray-600 mt-2 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            {slides[currentSlide].subtitle}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-center md:justify-start gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition">
              Get In Touch
            </button>
            <div className="flex items-center justify-center text-gray-800">
              <FaPhone className="text-xl text-red-500 mr-2" />
              <span className="font-semibold">+91-735736449</span>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="mt-6 flex justify-center md:justify-start space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-red-500" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative w-full h-80 sm:h-96 md:h-[500px] flex justify-center items-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-xl relative">
            <img
              src={slides[currentSlide].image}
              alt="Slide"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Icons */}
          <span className="absolute top-4 left-4 text-lg animate-bounce">🔮</span>
          <span className="absolute top-12 right-10 text-lg animate-pulse">🌙</span>
          <span className="absolute bottom-6 right-12 text-lg animate-spin-slow">
            ✨
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
