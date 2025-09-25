"use client";

import CardProfile from "@/components/cardprofile";
import Sidebar from "@/components/sidebar";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen bg-[#1E1E1E] text-white">
    
      <div className="flex flex-col items-center justify-center p-8 bg-[#1F1F1F] w-1/4">
        <CardProfile />
      </div>


      <div className="flex-1 flex flex-col mt-30 p-12">
        <h3 className=" mb-3 text-2xl md:text-5xl">
          <span className="text-white">About </span>
          <span className="text-orange-500">Me</span>
        </h3>

        <h2 className="text-4xl md:text-6xl font-bold mb-4 mt-2">
          I find fulfillment in blending <br />
          visual design with the power of  <br />
          coding to create meaningful <br />
          experiences.
        </h2>
        <p className="text-gray-400 mb-8 text-base md:text-lg max-w-6xl leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>


      </div>

  
      <div className="w-1/12 flex justify-end">
        <Sidebar />
      </div>
    </div>
  );
}
