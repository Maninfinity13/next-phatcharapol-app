"use client";

import CardProfile from "@/components/cardprofile";
import Sidebar from "@/components/sidebar";

export default function EduexpPage() {
  return (
    <div className="flex min-h-screen bg-[#1E1E1E] text-white">
      
      <div className="flex flex-col items-center justify-center p-8 bg-[#1F1F1F] w-1/4">
        <CardProfile />
      </div>


      <div className="flex-1 flex flex-col mt-30 p-12">
        <h3 className=" mb-3 text-6xl font-bold">
          <span className="text-white">Education & </span>
          <span className="text-orange-500">Experience</span>
        </h3>
        <div>
        <h1 className="text-orange-500 mb-1  ml-10 text-2xl mt-5">
          2022 - Present
        </h1>
        <h1 className="text-white    ml-10 text-2xl mt-2">
          UI/UX Designer
        </h1>
        <p className="text-gray-400 mb-1 ml-15 text-base md:text-lg ">
          Freelance
        </p>
         <h1 className="text-white    ml-10 text-2xl mt-2">
          Fullstack Web Developer
        </h1>
        <p className="text-gray-400 mb-1 ml-15 text-base md:text-lg ">
          Freelance
        </p>
        </div>

        <div>
        <h1 className="text-gray-500   mb-1  ml-10 text-2xl mt-5">
          2022 - 2025
        </h1>
        <h1 className="text-white    ml-10 text-2xl mt-2">
          Study at Southeast Asia University in Digital Technology and Innovation
        </h1>
        <p className="text-gray-400 mb-1 ml-10 text-base md:text-lg ">
          Southeast Asia University
        </p>
        </div>
        <div>
        <h1 className="text-gray-500   mb-1  ml-10 text-2xl mt-5">
          2016-2021
        </h1>
        <h1 className="text-white    ml-10 text-2xl mt-2">
          High school
        </h1>
        <p className="text-gray-400 mb-1 ml-10 text-base md:text-lg ">
          Punyaworakun Schoool
        </p>
        </div>
        

      <div className="w-1/12 flex justify-end">
        <Sidebar />
      </div>
    </div>
    </div>
  );
}
