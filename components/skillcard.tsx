"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SkillCardProps {
  icon: IconDefinition;
  percentage: number | string;
  name: string;
  color?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  percentage,
  name,
  color = "gray",
}) => {
  const [hover, setHover] = useState(false);

  const width = 150;
  const height = 300;
  const stroke = 3;
  const rx = width / 2;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      
      <div
        style={{
          width,
          height,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: `${stroke}px solid ${hover ? "#FFA500" : color}`,
          borderRadius: rx,
          transition: "border-color 0.3s",
          padding: 12,
        }}
      >
       
        <FontAwesomeIcon
          icon={icon}
          style={{ fontSize: 120, color: hover ? "#FFA500" : color }}
        />

       
        <span
          style={{
            marginTop: 30,
            fontSize: 22,
            fontWeight: "bold",
            color: hover ? "#FFA500" : color,
          }}
        >
          {percentage}%
        </span>
      </div>

     
      <span
        style={{
          marginTop: 12,
          fontSize: 20,
          
          color: "white",
        }}
      >
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
