// components/CardProfile.tsx
"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import myPic from '../app/images/phatcharapol.png';

export default function CardProfile() {
  return (
    <div className="w-full h-180 bg-black text-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-4">
      {/* Name */}
      <h1 className="text-3xl md:text-4xl self-start">
        <span className="text-orange-500">P</span>hatcharapol
      </h1>

      {/* Image */}
      <div className="w-full flex-1 relative rounded-xl overflow-hidden">
        <Image
          src={myPic}
          alt="Phatcharapol"
          fill
          className="object-cover"
        />
      </div>

      {/* Student ID */}
      <p className="text-white text-xl -mt-1">STU ID: 6552410016</p>

      {/* Role */}
      <p className="text-gray-400 text-sm">Fullstack Web Developer</p>

      {/* Social Icons */}
      <div className="flex space-x-4 mt-2 text-white">
        <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "35px" }} />
        <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: "35px" }} />
        <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "35px" }} />
        <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "35px" }} />
        <FontAwesomeIcon icon={faGoogle} style={{ fontSize: "35px" }} />
      </div>

      {/* Hire Me Button */}
      <button className="w-full mt-4 bg-[#FF5C00] text-black py-3 rounded-lg text-2xl">
        HIRE ME !
      </button>
    </div>
  );
}
