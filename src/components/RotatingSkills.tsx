import Image from "next/image";
import { aboutMe } from "@/data/aboutMe";

export default function RotatingSkills() {
  const radius = 120; // distance from center

  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Center image */}
      <div
        className="w-24 h-24 overflow-hidden"
        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
      >
        <Image src={aboutMe.imageUrl} 
          width={96}
          height={96}
          alt="Me" 
          className="w-full h-full object-cover" />
      </div>

      {/* Rotating skills */}
      <div>
      {/*  className="absolute top-1/2 left-1/2 animate-spin origin-center duration-[15000ms] ease-linear"> */}
        {/* {aboutMe.skills.map((skill, index) => {
          {/* const angle = (360 / aboutMe.skills.length) * index;
          return (
            <div
              key={skill.name}
              className={`absolute w-12 h-12 flex items-center justify-center text-white rounded-lg transform -translate-x-1/2 -translate-y-1/2 rotate-0 ${
                skill.color || "bg-indigo-600"
              }`}
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
              }}
              title={skill.name}
            >
              <span className="text-xs font-bold">{skill.name}</span>
            </div>
          );
        })} */}

        {aboutMe.skills.map((skill, index) => {
          const angle = (360 / aboutMe.skills.length) * index;
          return (
            <div
              key={skill.name}
              className={`absolute w-12 h-12 flex items-center justify-center text-white rounded-lg transform -translate-x-1/2 -translate-y-1/2 rotate-0 bg-gray-800`}
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
              }}
              title={skill.name}
            >
              <Image src={skill.imageUrl} alt={skill.name} width={24} height={24} />
            </div>
          );
        })}
      </div>
    </div>
  );
}