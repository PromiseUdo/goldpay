"use client";

import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { setTimeout } from "timers";
import { clsx } from "clsx";
import Container from "./Container";
import Link from "next/link";
const slides = [
  {
    url: "/carousel1.jpg",
  },
  {
    url: "/carousel2.jpg",
  },
  {
    url: "/carousel3.jpg",
  },
];

const slideContent = [
  {
    title: "Plan for a better future",
    subtitle: "Our Investment program returns 16% interest per annum",
    buttonCaption: "Start Investing",
    url: "/",
  },
  {
    title: "Access Loan in less than 24 hours",
    subtitle: "Get up to ₦10,000,000 with our stress-free process",
    buttonCaption: "Get Loan",
    url: "/",
  },
  {
    title: "Take the Bold Step With Us",
    subtitle:
      "We are always available and happy to guide you into your dreams and aspirations",
    buttonCaption: "Start Today",
    url: "/",
  },
];
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 5000);
  });
  return (
    <div className="row-start-1 row-end-3 col-start-1 col-end-5  w-full h-[100vh] relative">
      <div className="absolute h-[inherit] w-[inherit] inset-0 bg-black opacity-70  "></div>

      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-full bg-center bg-cover duration-500 "
      >
        <div className="flex flex-col items-start justify-center w-[100%] absolute md:w-[100%]  top-[40%] left-1/2 transform -translate-x-1/2  gap-3  ">
          <Container>
            <div className="flex flex-col gap-3">
              <h1 className="text-[#f7f7f7] text-shadow-md text-3xl md:text-4xl lg:text-6xl font-bold mb-4 ">
                {slideContent[currentIndex].title}
              </h1>
              <div className="w-36 h-[2px] bg-[#FFB600]"></div>
              <p className="text-[#f7f7f7] text-base md:text-lg tracking-wide max-w-[100%] md:max-w-[60%] ">
                {slideContent[currentIndex].subtitle}
              </p>
            </div>

            <div className="flex mt-6 w-full justify-start  items-start gap-4">
              <Link
                href="/application/loan"
                className="shadow-md bg-[#FFB600] text-[black] hover:text-[#f7f7f7] px-4 py-2 rounded-3xl text-base md:text-lg hover:bg-[#282e52] transition-all duration-100 font-semibold"
              >
                {slideContent[currentIndex].buttonCaption}
              </Link>
            </div>
          </Container>
        </div>
        {/* left arrow */}
        <div className="hidden lg:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl shadow-sm rounded-full p-2 bg-white/20 hover:bg-[#c5c5c520] transition-all duration-100 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={20} />
        </div>
        {/* right arrow */}
        <div className="hidden lg:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-base shadow-sm rounded-full p-2 bg-white/20 hover:bg-[#c5c5c520] transition-all duration-100 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={20} />
        </div>
      </div>

      <div className="absolute h-8 w-full bottom-0  gap-2 flex  justify-center py-2">
        {slides.map((slide, idx) => (
          <div
            onClick={() => goToSlide(idx)}
            key={idx}
            className={clsx(
              "p-1 text-2xl h-2 w-2 bg-white  rounded-full cursor-pointer",
              currentIndex !== idx && "bg-opacity-50"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
