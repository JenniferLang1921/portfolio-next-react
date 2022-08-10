import Image from "next/image";
import React from "react";
import Link from "next/link";
import AboutImg from "../public/assets/JenniferLang2-01.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-8">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am a full-stack web developer</p>
          <p className="py-2 text-gray-600">
            I earned my certificate at Full-Stack Web Development Coding
            Bootcamp at the University of Kansas in 2018. Since then, I have
            been working as a front-end drupal and full-stack wordpress
            developer for Agile Technology Solutions at the University of Kansas
            and am currently working there. I work with javascript, html, css, and php.
          </p>
          <p className="py-2 text-gray-600">
            I would like to transition into a job that includes building apps
            with React.js, Vue.js, and Next.js and work on a great team. I have
            exceptional experience with accessibility, SEO, and product
            marketing. I love creating and problem solving in programming. I want to help others create
            websites they love, make them money, and find solutions for their
            needs. </p>
            <p>When I'm not coding, you'll find me painting, watching
            youtube, reading a book, or exploring lakes and cities.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto">
          <Image
            src={AboutImg}
            alt="/"
            width="400"
            height="560
            "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
