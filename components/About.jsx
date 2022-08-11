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
            developer for Agile Technology Solutions at the University of
            Kansas.
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
