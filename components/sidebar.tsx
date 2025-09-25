"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBook,
  faList,
  faBriefcase,
  faEnvelope,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname(); // ดึง path ปัจจุบัน

  const icons = [
    { icon: faHome, name: "Home", href: "/" },
    { icon: faUser, name: "User", href: "/aboutme" },
    { icon: faBook, name: "Book", href: "/eduexp" },
    { icon: faList, name: "List", href: "/spec" },
    { icon: faBriefcase, name: "Briefcase", href: "/projects" },
    { icon: faEnvelope, name: "Envelope", href: "/skills" },
    { icon: faMessage, name: "Message", href: "/contactme" },
  ];

  return (
    <div className="fixed top-1/2 right-12 transform -translate-y-1/2 flex flex-col items-center bg-black rounded-2xl py-4 px-3 space-y-6 shadow-2xl">
      {icons.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`
            p-3 transition-colors duration-200 rounded-lg
            ${
              pathname === item.href
                ? "text-orange-500 border-2 border-orange-500"
                : "text-gray-400 hover:text-orange-500"
            }
          `}
        >
          <FontAwesomeIcon icon={item.icon} className="text-2xl" />
        </Link>
      ))}
    </div>
  );
}
