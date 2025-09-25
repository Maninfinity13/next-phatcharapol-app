"use client";

import CardProfile from "@/components/cardprofile";
import Sidebar from "@/components/sidebar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function ProjectPage() {
  const images = ["/img1.png", "/img2.png", "/img3.jpg", "/img4.png"];

  return (
    <div className="flex min-h-screen bg-[#1E1E1E] text-white">
    
      <div className="flex flex-col items-center justify-center p-8 bg-[#1F1F1F] w-1/4">
        <CardProfile />
      </div>

    
      <div className="flex-1 flex flex-col mt-30 p-12">
        <h3 className="mb-3 text-7xl font-bold">
          <span className="text-white">Featured </span>
          <span className="text-orange-500">Projects</span>
        </h3>

        <h2 className="text-4xl md:text-4xl font-bold mb-4 mt-2">
          Manage Task App - fullstack web development
        </h2>
        <p className="text-gray-400 mb-8 text-base md:text-lg max-w-2xl leading-relaxed">
          Here&apos;s my latest project built with Next.js and Laravel, using
          TailwindCSS on the front-end. Watch the video to see the responsive
          landing page in action!
        </p>
        <div className="w-[95%] max-w-6xl ml-0"> 
        
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            className="w-full rounded-xl overflow-hidden shadow-lg"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Project ${index + 1}`}
                  className="w-full h-[500px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      
      <div className="w-1/12 flex justify-end">
        <Sidebar />
      </div>

      
      
    </div>
  );
}
