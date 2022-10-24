import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineBehance } from "react-icons/ai";
import ReactPlayer from "react-player";

const Main = () => {
  return (
    <div
      id="home"
      className="w-full pb-[56.25%] text-center relative overflow-hidden"
    >
      <ReactPlayer
        url="https://youtu.be/xnSb4oVY32I"
        playing="true"
        loop="true"
        muted="true"
        width="100%"
        height="100%"
        className="object-cover absolute top-0 right-o left-0"
      />
      <div className="bg-gradient-to-r from-transparent via-slate-50 to-transparent w-full h-full mx-auto p-2 flex justify-center items-center absolute top-0">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-900 mt-[15%] py-4">
            Let's build something together
          </p>
          <h1 className="py-1 md:py-4 text-gray-700 text-2xl md:text-4xl">
            Hi, I'm{" "}
            <span className="text-[#5651e5] text-2xl md:text-4xl">
              Jennifer
            </span>
          </h1>
          <h1 className="py-1 md:py-4 text-gray-700 text-2xl md:text-4xl">
            A Full-Stack Web Developer
          </h1>
          <p className="py-4 text-gray-600 hidden md:block max-w-[70%] m-auto">
            I'm a full-stack developer specializing in building and designing
            exceptional digital experiences. Currently, I’m focused on building
            responsive react.js and next.js front-end web applications while
            learning MySQL and node.js back-end technologies.
          </p>

          <div className="flex items-center justify-between max-w-[500px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-75">
              <a href="https://www.linkedin.com/in/jenniferlang1921/">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-75">
              <a href="https://github.com/JenniferLang1921/">
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-75">
              <a href="https://twitter.com/JennyLang01">
                <FaTwitter />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-75">
              <a href="https://www.behance.net/jenniferlang1921">
                <AiOutlineBehance />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-75">
              <a href="mailto:jenniferlang1921@gmail.com">
                <AiOutlineMail />
              </a>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-75">
              <a href="https://drive.google.com/file/d/1STLk7Q5M935ZVccIr9x5dUeicDkI9T0M/view?usp=sharing">
                <BsFillPersonLinesFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
