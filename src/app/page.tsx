import About from "@/components/About/About";
import Contacts from "@/components/Contacts/Contacts";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Separator from "@/components/shared/Separator/Separator";
import Skills from "@/components/Skills/Skills";
import Footer from "@/components/ui/Footer/Footer";
import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Hero />
      <Separator
        id="sep-projects"
        text="projects"
        href="/projects"
        textColor="#FFFFFF"
        separatorColor="#C778DD"
        viewAllColor="#ABB2BF"
        showViewAll={false}
      />
      <Projects />
      <Separator
        id="sep-skills"
        text="skills"
        href="/skills"
        showViewAll={false}
        textColor="#FFFFFF"
        separatorColor="#C778DD"
        viewAllColor="#ABB2BF"
      />
      <Skills />
      <Separator
        id="sep-about"
        text="about-me"
        href="/about"
        showViewAll={false}
        textColor="#FFFFFF"
        separatorColor="#C778DD"
        viewAllColor="#ABB2BF"
      />
      <About />
      <Separator
        id="sep-contacts"
        text="contacts"
        href="/contacts"
        showViewAll={false}
        textColor="#FFFFFF"
        separatorColor="#C778DD"
        viewAllColor="#ABB2BF"
      />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
