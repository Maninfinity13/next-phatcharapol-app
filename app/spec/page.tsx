"use client";

import CardProfile from "@/components/cardprofile";
import Sidebar from "@/components/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGlobe, faPen } from "@fortawesome/free-solid-svg-icons";

export default function SpecPage() {
  const specializations = [
    {
      title: "Front-end Developer",
      desc: "Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.",
      icon: <FontAwesomeIcon icon={faCode} className="text-orange-500 w-6 h-6" />,
    },
    {
      title: "UI/UX Designer",
      desc: "UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.",
      icon: <FontAwesomeIcon icon={faGlobe} className="text-orange-500 w-6 h-6" />,
    },
    {
      title: "Graphic Designer",
      desc: "As a graphic designer, I transform ideas into visually striking and impactful designs.",
      icon: <FontAwesomeIcon icon={faPen} className="text-orange-500 w-6 h-6" />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#1E1E1E] text-white">

      <div className="flex flex-col items-center justify-center p-8 bg-[#1F1F1F] w-1/4">
        <CardProfile />
      </div>


      <div className="flex-1 flex flex-col mt-12 p-12 space-y-8">
        <h3 className="mb-6 text-6xl font-bold">
          <span className="text-white">My </span>
          <span className="text-orange-500">Specializations</span>
        </h3>

        <div className="flex flex-col space-y-6">
          {specializations.map((item, index) => (
            <div
              key={index}
              className="relative p-8 md:p-10 border border-orange-500 rounded-2xl hover:shadow-xl transition-shadow bg-[#2A2A2A] min-h-[200px] max-w-4xl"
            >
              <div className="absolute top-3 right-3 text-2xl md:text-3xl text-orange-500">
                {item.icon}
              </div>

              <div className="flex flex-col space-y-2">
                <h1 className="text-white text-xl md:text-2xl font-semibold">{item.title}</h1>
                <p className="text-gray-300 text-base md:text-lg line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>


          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/12 flex justify-end">
        <Sidebar />
      </div>
    </div>
  );
}
