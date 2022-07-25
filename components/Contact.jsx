import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contactMe.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const router = useRouter();
  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: "https://jenniferlangportfolio.vercel.app/api/contact",
      //url: "http://localhost:3000/api/contact",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response);
      if (response.status == 200) {
        reset();
      }
    } catch (err) {}
  }

  return (
    <div id="contact" className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2>Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/*left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <Image
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src={ContactImg}
                alt="/"
                width="500"
                height="333"
              />
              <div>
                <h2 className="py-2">Jennifer Lang</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
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

          {/*right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 ${
                        errors.name ? 'background-red-600' : null'}"
                      type="text"
                      name="name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Name is required.",
                        },
                      })}
                    />
                    <p className="text-red-600 font-bold text-sm py-2">
                      {errors?.name?.message}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                      {...register("phone")}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required.",
                      },
                      minLength: {
                        value: 8,
                        message: "Please enter your email",
                      },
                      maxLength: {
                        value: 120,
                        message: "Please enter your email",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  <p className="text-red-600 font-bold text-sm py-2">
                    {errors?.email?.message}
                  </p>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    {...register("subject")}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    {...register("message", {
                      required: {
                        value: true,
                        message: "You need to enter a message",
                      },
                      minLength: {
                        value: 50,
                        message:
                          "Your message must be longer than 50 characters",
                      },
                      maxLength: {
                        value: 1000,
                        message:
                          "Your message can't be more than 1000 characters",
                      },
                    })}
                  ></textarea>
                  <p className="text-red-600 font-bold text-sm py-2">
                    {errors?.message?.message}
                  </p>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-75">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
