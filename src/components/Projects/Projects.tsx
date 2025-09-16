"use client";
import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { ExternalLink, Github } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Project = {
  title: string;
  description?: string;
  technologies?: string[];
  code?: string;
  live?: string;
  workingon?: boolean;
};

const Projects = () => {
  const { t } = useI18n();
  const raw = t("projects.list", []) as unknown;
  const projectsData: Project[] = Array.isArray(raw) ? (raw as Project[]) : [];

  const icons = [
    <Github key="icon-github-0" />,
    <ExternalLink key="icon-external-1" />,
    <Github key="icon-github-2" />,
  ];

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-6 justify-start">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title ?? `project-${index}`}
              img={
                index === 0
                  ? "/portofliobuilder.png"
                  : index === 1
                  ? "/imexdocs.gif"
                  : "/s7ete.png"
              }
              title={project.title}
              description={project.description ?? ""}
              technologies={project.technologies ?? []}
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
