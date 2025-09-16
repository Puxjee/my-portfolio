import React from "react";
import SkillCard from "./SkillCard/SkillCard";
import Image from "next/image";
import { title } from "process";

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Prisma ORM"],
    },
    {
      title: "Data Bases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    },
    {
      title: "Cloud / DevOps",
      skills: ["Azure", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Java", "C.js", "Python"],
    },
    {
      title: "Tools",
      skills: [
        "Git/Github/Gitlab",
        "Figma",
        "Postman",
        "DBeaver",
        "VS Code",
        "Linux",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-12  grid grid-cols-2 justify-center gap-6 max-w-5xl w-full"
    >
      <Image
        src="skills.svg"
        alt="Skills Decoration"
        width={400}
        height={300}
      />
      <div className="col-span-1 grid grid-cols-3 gap-20">
        {skillsData.map((category, index) => (
          <SkillCard
            key={index}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
