"use client";
import Button from "@/components/shared/Button/Button";
import { Dot, Github } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useI18n } from "@/lib/i18n";

interface ProjectCardProps {
  img: string;
  live?: string;
  code?: string;
  title: string;
  technologies: string[];
  description: string;
  liveText?: string;
  codeIcon?: React.ReactNode;
  showLive?: boolean;
  showCode?: boolean;
  workingon?: boolean;
  codeLabel?: string;
}

const ProjectCard = ({
  img,
  title,
  live,
  code,
  technologies,
  description,
  liveText = undefined,
  codeIcon = <Github />,
  showLive = true,
  showCode = true,
  workingon = false,
  codeLabel = undefined,
}: ProjectCardProps) => {
  const { t } = useI18n();
  const resolvedLiveText = liveText ?? t("projects.liveText", "Live ~~>");
  const resolvedCodeLabel = codeLabel ?? t("projects.codeLabel", "Code");
  const wipLabel = t("projects.wip", "WIP");
  return (
    <div className="border border-[#ABB2BF] bg-[#282C33] w-80 max-w-sm">
      {/* Project Image */}
      <div className="relative">
        <Image
          src={img}
          alt={title}
          className="w-full h-48 object-cover"
          height={192}
          width={320}
          unoptimized
        />
      </div>

      {/* Technologies */}
      <div className="border-t border-[#ABB2BF] px-2 py-2">
        <p className="text-[#ABB2BF] text-sm">{technologies.join(" ")}</p>
      </div>

      {/* Content */}
      <div className="p-4 border-t border-[#ABB2BF]">
        <h3 className="text-white text-xl font-medium mb-3 flex items-center gap-2">
          {title}
          {workingon && (
            <span className="text-[#C778DD] flex items-center">
              <Dot className="w-15 h-15 fill-current drop-shadow-[0_0_8px_#C778DD] animate-pulse" />
              <span className="text-sm drop-shadow-[0_0_4px_#C778DD] -ml-1">
                {wipLabel}
              </span>
            </span>
          )}
        </h3>
        <p className="text-[#ABB2BF] text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button
            text={resolvedLiveText}
            onClick={
              showLive && live ? () => window.open(live, "_blank") : undefined
            }
            className={`border-[#C778DD] text-white hover:bg-[#C778DD]/10 transition-all duration-300 ease-in-out text-sm ${
              !showLive && "opacity-50 cursor-not-allowed"
            }`}
          />

          <Button
            text={resolvedCodeLabel}
            onClick={
              showCode && code ? () => window.open(code, "_blank") : undefined
            }
            hasIcon={true}
            icon={codeIcon}
            className={`border-[#ABB2BF] text-[#ABB2BF] hover:bg-[#ABB2BF]/10 hover:text-white transition-all duration-300 ease-in-out text-sm ${
              !showCode && "opacity-50 cursor-not-allowed"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
