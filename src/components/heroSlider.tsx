"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/assets/images/nusaybah2.png",
      content: {
        span: "Dare to dream",
        title: "starlets",
      },
    },
    {
      image: "/assets/images/nusaybah.png",
      content: {
        span: "Dare to dream",
        title: "starlets",
      },
    },
    {
      image: "/assets/images/nusaybah2.png",
      content: {
        span: "Dare to dream",
        title: "starlets",
      },
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative pt-56 min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/assets/images/teamphoto2.JPG')" }}
      id="home"
    >
      <div className="container mx-auto px-8">
        <div className="slides-container relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide flex items-center flex-wrap gap-6 ${
                index === currentSlide ? "block" : "hidden"
              }`}
            >
              <div className="content flex-1 min-w-0 animate-fadeLeft">
                <span className="text-black text-5xl font-bold block">
                  {slide.content.span}
                </span>
                <h3 className="text-6xl text-blue-100 py-2 font-bold uppercase">
                  {slide.content.title}
                </h3>
                <Link
                  href="https://docs.google.com/forms/d/1jQhLQYVWiSpkaQGz7n9_Mg7rqIyyBuPN_pc3ieovhh4/edit"
                  target="_blank"
                  className="inline-block mt-4 px-12 py-3 bg-gray-500 text-black font-bold text-lg rounded-lg hover:bg-blue-100 hover:text-gray-500 transition-all duration-300"
                >
                  Sign Up
                </Link>
              </div>
              <div className="img flex-1 min-w-0">
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div
          className="absolute top-1/2 left-8 transform -translate-y-1/2 h-20 w-20 flex items-center justify-center bg-gray-500 text-blue-100 text-2xl cursor-pointer hover:bg-white hover:text-gray-500 transition-all duration-300 box-shadow-custom border border-gray-700"
          onClick={prevSlide}
        >
          <i className="fas fa-angle-left"></i>
        </div>

        <div
          className="absolute top-1/2 right-8 transform -translate-y-1/2 h-20 w-20 flex items-center justify-center bg-gray-500 text-blue-100 text-2xl cursor-pointer hover:bg-white hover:text-gray-500 transition-all duration-300 box-shadow-custom border border-gray-700"
          onClick={nextSlide}
        >
          <i className="fas fa-angle-right"></i>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
