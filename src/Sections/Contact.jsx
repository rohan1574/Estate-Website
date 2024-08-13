import React, { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      className={`${
        darkMode ? "dark bg-black" : "light bg-transparent "
      } pb-20`}
    >
      <section id="contact"
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[90%] w-full h-fit m-auto  rounded-xl justify-center grid lg:grid-cols-2 grid-cols-1 items-center lg:px-36 px-6 py-20 gap-10 `}
      >
        <div
          data-aos="zoom-in"
          className="bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl "
        >
          <h1 className="text-2xl text-black font-semibold dark:text-white ">
            Send us a message today
          </h1>
          <input
            type="text"
            placeholder="Enter your full name here"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl "
          />
          <input
            type="email"
            placeholder="Enter your valid email"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl "
          />
          <input
            type="number"
            placeholder="Enter your mobile number"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl "
          />
          <textarea
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl "
            name="id"
            cols="30"
            rows="5"
            placeholder="Enter your message here..."
            id=""
          ></textarea>
          <button className="bg-red-500 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer ">
            SEND EMAIL
          </button>
        </div>
        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6 ">
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-red-500 dark:text-white "
          >
            REACH US
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-black text-[40px] font-semibold leading-10 dark:text-white"
          >
            Get in touch with us today and our team will assist you
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-xl text-gray-600 dark:text-white text-justify "
          >
            Our experts and developers would love to contribute their expertise
            and insights and help you today. Contact us to help you plan your
            next transaction, either buying or selling a home.
          </p>
          <button className="bg-red-500 dark:bg-red-500 hover:bg-black dark:hover:bg-black dark:hover:text-black text-lg p-4  text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300  ">
            CONTACT US
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
