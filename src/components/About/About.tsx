import Image from "next/image";
import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";

const About = () => {
  return (
    <div className="py-4 flex flex-row items-center justify-between gap-50">
      <div className="max-w-xl text-gray-300 text-left space-y-6">
        {/*about me text */}
        👋 Hi, I’m Melek ElMokhtar, a Full-Stack Web Developer passionate about
        turning complex ideas into elegant, user-friendly applications. With a
        background in Next.js, React, Node.js, and modern databases (PostgreSQL,
        MongoDB, Prisma), I enjoy building solutions that are not only scalable
        but also deliver real business impact.
        <br />
        <br />
        💡 I thrive at the intersection of frontend precision and backend
        performance. Whether it’s designing a responsive interface, implementing
        real-time dashboards, or developing secure APIs, I bring a full-stack
        approach that connects the dots between user experience and technical
        reliability.
        <br />
        <br />
        🌍 My recent projects range from delivering a collaborative
        documentation portal (MVP in 12 weeks, Scrum) to creating an e-commerce
        platform with secure payments and stock management. These experiences
        sharpened my ability to solve problems quickly, manage priorities under
        pressure, and keep a positive, solution-oriented mindset.
        <br />
        <br />✨ What I bring:
        <ul>
          <li>
            • Strong command of JavaScript/TypeScript, Next.js, React, Node.js,
            Express
          </li>
          <li>
            • Expertise in database design & cloud integration (PostgreSQL,
            MongoDB, Firebase, Azure)
          </li>
          <li>
            • Experience delivering end-to-end solutions, from UX to deployment
          </li>
          <li>
            • A collaborative spirit, adaptability, and problem-solving under
            tight deadlines
          </li>
        </ul>
      </div>
      {/*about me image */}
      <ProfileCard
        avatarUrl="/aboutme.png"
        iconUrl="/pattern-icon.svg"
        grainUrl="/grain.jpg" // Optional grain texture overlay effect
        behindGradient="linear-gradient(135deg, #C778DD 0%, #C778DD 100%)"
        innerGradient="linear-gradient(120deg, #232946 0%, #C778DD 100%)"
        showBehindGradient={true}
        enableTilt={false}
        enableMobileTilt={false}
        mobileTiltSensitivity={0}
        miniAvatarUrl=""
        name="Melek ElMokhtar"
        title="Full-Stack Web Developer"
        handle="puxje"
        status="Online"
        contactText="Contact Me"
        showUserInfo={true}
      />
    </div>
  );
};

export default About;
