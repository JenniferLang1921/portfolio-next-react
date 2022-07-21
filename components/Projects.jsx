import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import KansasCityLoveImg from "../public/assets/projects/KansasCityLove.png";
import WebDevNewsImg from "../public/assets/projects/WebDevNews.png";
import DadJokesImg from "../public/assets/projects/DadJokes.png";
import BlogImg from "../public/assets/projects/Blog.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="KansasCityLove"
            backgroundImg={KansasCityLoveImg}
            tech="React.js"
            projectUrl="/kansascitylove"
          />

          <ProjectItem
            title="WebDev News"
            backgroundImg={WebDevNewsImg}
            tech="React.js"
            projectUrl="/webdevnews"
          />

          <ProjectItem
            title="Dad Jokes"
            backgroundImg={DadJokesImg}
            tech="Vue.js"
            projectUrl="/dadjokes"
          />

          <ProjectItem
            title="React Blog"
            backgroundImg={BlogImg}
            tech="React.js"
            projectUrl="/blogproject"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
