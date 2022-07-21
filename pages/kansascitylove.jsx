import React from "react";
import KansasCityLoveImg from "../public/assets/projects/KansasCityLove.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const kansascitylove = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={KansasCityLoveImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Kansas City Love</h2>
          <h3>React.js / Tailwind.css / AWS Amplify</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React JS and is hosted on AWS Amplify. I am
            currently working on this project and it is not finished. Users will
            be able to find events to go to in Kansas City and also pick
            pre-planned outings from suggestions based on what kind of
            experience they want to have. It will be different from a typical
            event planner because I want to put an experience together (lunch at
            xyz cafe, visit the zoo that is near it, finish the day with ice
            cream from abc shoppe) This is a passion project of mine that I am
            having a lot of fun with. I started it on create-react-app but am
            migrating it to next.js so it will have better SEO. I would like to
            use a database with it someday, but first I am building it with an
            internal api.
          </p>
          <a
            href="https://www.thingstodoinkc.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mr-8 mt-2">Demo</button>
          </a>
          <a
            href="https://github.com/JenniferLang1921/ilovekansascity2"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-2">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Internal API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                AWS Amplify
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default kansascitylove;
