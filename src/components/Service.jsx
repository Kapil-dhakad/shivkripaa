import React from "react";
import Img1 from "../assets/img1.jpeg";
import Img2 from "../assets/img2.jpeg";
import Img3 from "../assets/img3.jpeg";
import Img4 from "../assets/img4.jpeg";
import Img5 from "../assets/img5.jpeg";
import Img6 from "../assets/img6.jpeg";
import Laint1 from "../assets/laint2.jpeg";
import Laint3 from "../assets/laint3.jpeg";

const services = [
  { title: "Outlate Visit", image: Img1 },
  { title: "Site Visite", image: Img2 },
  { title: "Village Services", image: Img3 },
  { title: "Shop and Store Visite", image: Img4 },
  { title: "Rural Promoter", image: Img5 },
  { title: "FSC", image: Img6 },
  { title: "Advertisement", image: Laint1 },
  { title: "Distribution of Gifts", image: Laint3 },
];

const Service = () => {
  return (
    <section className="bg-[#FCE9D1] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#de1f1f] text-white text-center rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 sm:h-64 object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="py-4 px-2 text-sm sm:text-base md:text-lg font-semibold">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
