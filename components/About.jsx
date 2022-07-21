import Image from "next/image";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am a full-stack web developer</p>
          <p className="py-2 text-gray-600">
            I create simple, beautiful, and functional websites. When I`'`m not
            coding, you`'`ll find me painting, watching youtube, reading a book,
            or exploring lakes and cities.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto">
          <Image
            src="/../public/assets/JenniferLang2-01.png"
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
