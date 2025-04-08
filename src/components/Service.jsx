import React from "react";
import Img1 from "../assets/img1.jpeg"
import Img2 from "../assets/img2.jpeg"
import Img3 from "../assets/img3.jpeg"
import Img4 from "../assets/img4.jpeg"
import Img5 from "../assets/img5.jpeg"
import Img6 from "../assets/img6.jpeg"
import Laint1 from "../assets/laint2.jpeg"
import Laint3 from "../assets/laint3.jpeg"



const services = [
  {
    title: "Outlate Visit",
    image: Img1
  },
  {
    title: "Site Visite",
    image: Img2,
  },
  {
    title: "Village Services",
    image: Img3,
  },
  {
    title: "Shop and Store Visite",
    image: Img4,
  },
  {
    title: "Rural Promoter",
    image: Img5,
  },
  {
    title: "FSC",
    image: Img6,
  },
  {
    title: "Advertisement",
    image: Laint1,
  },
  {
    title: "Distribution of Gifts",
    image: Laint3,
  },
];

const Service = () => {
  return (
    <section className="bg-[#FCE9D1] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#de1f1f] text-white text-center rounded-lg overflow-hidden shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-78 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="py-3 font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
