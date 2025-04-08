import React from "react";
import mainImage from "../assets/main.jpeg";

const Home = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${mainImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Welcome to Shiv Kripa Enterprises, Unhel
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl">
          Experience the wisdom of Airtel for your future guidance.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#de1f1f] text-white text-lg rounded-lg font-semibold hover:bg-[#cc5200] transition-transform transform hover:scale-105">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Home;
