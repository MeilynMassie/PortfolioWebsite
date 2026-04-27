"use client";

import Image from "next/image";
import { useState } from "react";
import { aboutMe } from "@/data/aboutMe";

export default function RotatingSkills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Orbit radius — distance from center of container to center of each skill node
  const ORBIT_RADIUS = 120;
  // Container is 320x320, center is at 160, 160
  const CENTER = 160;

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Outer container establishes the coordinate space */}
      <div className="relative w-80 h-80 flex items-center justify-center">

        {/* Dashed orbit track ring */}
        {/* <div
          className="absolute rounded-full border border-dashed border-white/20"
          style={{ width: ORBIT_RADIUS * 2, height: ORBIT_RADIUS * 2 }}
        /> */}

        {/* Subtle pulsing ring for depth */}
        <div
          className="absolute rounded-full border border-white/10 animate-pulse"
          style={{ width: ORBIT_RADIUS * 2 + 16, height: ORBIT_RADIUS * 2 + 16 }}
        />

        {/* ── Rotating ring wrapper ──────────────────────────────────── */}
        {/*
         * The ring div spins. Each skill node is positioned absolutely
         * around the circumference, then counter-rotated so the icon
         * stays upright while the ring turns.
         */}
        <div
          className="absolute"
          style={{
            width: CENTER * 2,
            height: CENTER * 2,
            animation: "orbit 18s linear infinite",
          }}
        >
          {aboutMe.skills.map((skill, index) => {
            const angleDeg = (360 / aboutMe.skills.length) * index;
            const angleRad = (angleDeg * Math.PI) / 180;

            // Position: sin for X (clockwise from top), -cos for Y
            const x = CENTER + ORBIT_RADIUS * Math.sin(angleRad);
            const y = CENTER - ORBIT_RADIUS * Math.cos(angleRad);

            return (
              <div
                key={skill.name}
                className="absolute"
                style={{
                  width: 44,
                  height: 44,
                  left: x - 22,
                  top: y - 22,
                  // Counter-rotate so the icon stays upright
                  animation: "counter-orbit 18s linear infinite",
                }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div
                  className="w-full h-full flex items-center justify-center bg-gray-900 border border-white/15 cursor-pointer transition-colors hover:bg-gray-800"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}
                >
                  <Image
                    src={skill.imageUrl}
                    alt={skill.name}
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>

                {hoveredSkill === skill.name && (
                  <div
                    className="absolute z-20 bottom-full left-1/2 mb-2 px-2 py-1 rounded text-xs text-white bg-gray-800 border border-white/15 whitespace-nowrap pointer-events-none"
                    style={{ transform: "translateX(-50%)" }}
                  >
                    {skill.name}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Profile image */}
        <div
          className="relative z-10 w-24 h-24 overflow-hidden border-2 border-white/20"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        >
          <Image
            src={aboutMe.imageUrl}
            width={96}
            height={96}
            alt="Profile photo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}