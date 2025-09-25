"use client";

import CardProfile from "@/components/cardprofile";
import Sidebar from "@/components/sidebar";

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-[#1E1E1E] text-white">
      {/* Left Card */}
      <div className="flex flex-col items-center justify-center p-8 bg-[#1F1F1F] w-1/4">
        <CardProfile />
      </div>


      <div className="flex-1 flex flex-col mt-30 p-12">
        <h3 className=" mb-3 text-2xl md:text-5xl">
          <span className="text-white">Lets Work </span>
          <span className="text-orange-500">Together!</span>
        </h3>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-5">
          Hi From <span className="text-orange-500">Phatcharapol</span>,
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-4 mt-2 ">
          Interactive Designer & Fullstack Web Developer
        </h2>
        <p className="text-gray-400 mb-8 text-base md:text-lg ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem in praesentium ex fugiat quos odit sed ratione ipsum cumque eius saepe corporis iste iure totam atque, doloribus magni ea at illo voluptate doloremque, voluptatum quod facilis. Fugit harum deserunt consequuntur minima dolor dignissimos quaerat voluptatem necessitatibus ex nostrum, animi ratione?
        </p>

        <div className="flex space-x-12 mt-10">
          <div>
            <p className="text-orange-500  text-9xl md:text-6xl">3+</p>
            <p className="text-gray-400 text-base md:text-lg">Years of Experience</p>
          </div>
          <div>
            <p className="text-orange-500  text-9xl md:text-6xl">10+</p>
            <p className="text-gray-400 text-base md:text-lg">Projects Completed</p>
          </div>

        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/12 flex justify-end">
        <Sidebar />
      </div>
    </div>
  );
}
