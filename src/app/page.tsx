import Hero from "@/components/Hero/Hero";
import Separator from "@/components/shared/Separator/Separator";
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
    </div>
  );
};

export default Home;
