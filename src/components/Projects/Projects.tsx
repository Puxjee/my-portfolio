"use client";
import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { ExternalLink, Github } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const Projects = () => {
  const { t } = useI18n();
  const list = t("projects.list", []) as any[];
  const projectsData = Array.isArray(list) ? list : [];

  const icons = [<Github />, <ExternalLink />, <Github />];

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-6 justify-start">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              img={
                index === 0
                  ? "/portofliobuilder.png"
                  : index === 1
                  ? "/imexdocs.gif"
                  : "/s7ete.png"
              }
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              code={project.code}
              showCode={!!project.code}
              showLive={!!project.live}
              workingon={project.workingon}
              codeIcon={icons[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
