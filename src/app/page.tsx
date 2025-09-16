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
        textKey="nav.works"
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
        textKey="nav.skills"
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
        textKey="nav.about"
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
        textKey="nav.contacts"
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
