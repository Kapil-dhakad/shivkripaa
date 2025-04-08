import React, { useState, useEffect } from "react";

import Laint from "../assets/laint.jpeg"
import Laint1 from "../assets/laint2.jpeg"
import Laint3 from "../assets/laint3.jpeg"


const Blog = () => {
  const galleryImages = [
      Laint,
      Laint1,
      Laint3  
  ];

  const blogPosts = [
    {
      category: "Opening",
      title: "Piploda",
      description:"Get ready for blazing-fast speeds, seamless connectivity, and cutting-edge technology that keeps you ahead in the digital world.",
      img: Laint
    },
    {
      category: "Opening",
      title: "Rui",
      description:"Airtel is proud to launch Airtel Tavor, a revolutionary new service designed to elevate your digital experience. Get ready for blazing-fast speeds, seamless connectivity, and cutting-edge technology that keeps you ahead in the digital world.",
      img: Laint1,
    },
    {
      category: "Opening",
      title: "Palsoda",
      description:"Upgrade to Airtel Tavor today and experience the next generation of connectivity!",
      img: Laint3,
    },
  ];

  // State to track the current index of the gallery
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide function every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#FCE9D1] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Gallery Section */}
        <h2 className="text-center text-2xl font-bold">Gallery</h2>
        <hr className="w-16 mx-auto border-gray-600 mt-2" />

        <div className="flex justify-center mt-6">
          <div className="relative w-[300px] h-[200px] overflow-hidden rounded-lg shadow-lg">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Blog Section */}
        <h2 className="text-center text-2xl font-bold mt-10">Blog</h2>
        <hr className="w-16 mx-auto border-gray-600 mt-2 mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <span className="text-xs uppercase bg-blue-500 text-white px-2 py-1 rounded-md">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold mt-2">{post.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
