import React from "react";

const SkillCard = ({ title, skills }) => {
  return (
    <div>
      <div className=" border-gray-400 border-1 w-45">
        <h3 className="p-4 text-lg font-semibold mb-2 text-purple-400 border-b-1 border-b-gray-400">
          {title}
        </h3>
        <div className="space-y-1 p-4">
          {skills.map((skill, index) => (
            <span key={index} className="text-gray-300 text-sm">
              {skill}
              {index < skills.length - 1 && ", "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
