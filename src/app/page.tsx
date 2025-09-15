import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Separator from "@/components/shared/Separator/Separator";
import Skills from "@/components/Skills/Skills";
import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Hero />
      <Separator
        text="Projects"
        href="/projects"
        textColor="#FFFFFF"
        separatorColor="#C778DD"
        viewAllColor="#ABB2BF"
      />
      <Projects />
      <Separator
        text="Skills"
        href="/skills"
        showViewAll={false}
        textColor="#FFFFFF"
        separatorColor="#C778DD"
        viewAllColor="#ABB2BF"
      />
      <Skills />
    </div>
  );
};

export default Home;
