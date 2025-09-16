"use client";
import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projectsData = [
    {
      img: "/portofliobuilder.png",
      title: "Portfolio Builder",
      technologies: ["Typescript", "NextJS", "PostgreSQL", "Prisma"],
      description:
        "Build your own portfolio in minutes, 0 coding skills required",
      liveText: "Live ~~>",
      codeIcon: <Github />,
      showLive: false,
      showCode: false,
      workingon: true,
    },
    {
      img: "/imexdocs.gif",
      title: "IMEX DOCS",
      code: "https://github.com/Puxjee/IMEX_DOCS_README/blob/main/README.md",
      technologies: [
        "React",
        "Next.js",
        "FastAPI",
        "Prisma",
        "PostgreSQL",
        "ChromaDB",
        "LangChain",
        "Tailwind CSS",
      ],
      description:
        "Collaborative enterprise document portal with AI-powered automation and secure payment integration.",
      liveText: "Live ~~>",
      codeIcon: <ExternalLink />,
      codeLabel: "Read More",
      showLive: false,
      showCode: true,
    },
    {
      img: "/s7ete.png",
      title: "S7ete e-commerce",
      technologies: [
        "ReactJS",
        "Express",
        "Node.js",
        "Tailwind CSS",
        "MongoDB",
      ],
      description: "A streetwear e-commerce shop for S7ete Studio",
      liveText: "Live ~~>",
      codeIcon: <Github />,
      showLive: false,
      showCode: false,
    },
  ];

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-6 justify-start">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
