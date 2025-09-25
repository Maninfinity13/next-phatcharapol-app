"use client";

import CardProfile from "@/components/cardprofile";
import Sidebar from "@/components/sidebar";
import SkillCard from "@/components/skillcard";
import { faReact, faJs, faFigma, faGithub, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";

export default function SkillsPage() {
  const skillsRow1 = [
    { icon: faReact, name: "React", percentage: 60 },
    { icon: faFigma, name: "Figma", percentage: 85 },
    { icon: faHtml5, name: "HTML/CSS", percentage: 80 },
    { icon: faCss3, name: "Next.js", percentage: 80 },
  ];

  const skillsRow2 = [
    { icon: faJs, name: "JavaScript", percentage: 60 },
    { icon: faGithub, name: "Github", percentage: 90 },
  ];

  return (
    <div className="flex min-h-screen bg-[#1E1E1E] text-white">
    
      <div className="flex flex-col items-center justify-center p-8 bg-[#1F1F1F] w-1/4">
        <CardProfile />
      </div>

     
      <div className="flex-1 flex flex-col mt-10 p-12">
        <h3 className="mb-8 text-7xl font-bold">
          <span className="text-white">My </span>
          <span className="text-orange-500">Skills</span>
        </h3>

      
        <div className="grid grid-cols-4 gap-8 justify-items-center">
          {skillsRow1.map((skill, idx) => (
            <SkillCard
              key={idx}
              icon={skill.icon}
              name={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>

       
        <div className="grid grid-cols-4 gap-8 justify-items-center mt-8">
          {skillsRow2.map((skill, idx) => (
            <SkillCard
              key={idx}
              icon={skill.icon}
              name={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>

      
      <div className="w-1/12 flex justify-end">
        <Sidebar />
      </div>
    </div>
  );
}
