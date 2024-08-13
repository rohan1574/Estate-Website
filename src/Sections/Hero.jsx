import React, { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import heroimg from "../assets/images/hero1.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
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
    <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
      <section
        id="hero"
        className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20 "
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <h1
          data-aos="zoom-in"
          className="text-white text-6xl font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]"
        >
          Find your next Home in Las Vegas
        </h1>
        <p
          data-aos="zoom-in "
          className="text-white text-xl lg:pr-[500px] pr-0"
        >
          Through our proprietary platform, WpResidence is changing how agents
          and clients navigate the process of finding or selling a home.
        </p>
      </section>
      {/* from start from here */}
      <div
        className={`${
          darkMode ? "dark bg-black" : "light bg-transparent"
        } z-10`}
      >
        <div
          data-aos="zoom-in"
          id="form"
          className={`${
            darkMode ? "dark bg-gray-800" : "light bg-white"
          } lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}
        >
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              Location
            </h1>
            <input
              type="text"
              placeholder="Enter address city, divison"
              className="bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]"
            />
          </div>
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">Type</h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1]"
            >
              <option value="" disabled selected>
                Select Property
              </option>
              <option value="option1">Rentials</option>
              <option value="option2">Sales</option>
              <option value="option3">Ecommerce</option>
            </select>
          </div>
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              Category
            </h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1]"
            >
              <option value="" disabled selected>
                Select Category
              </option>
              <option value="option1">Rentials</option>
              <option value="option2">Sales</option>
              <option value="option3">Rentials</option>
            </select>
          </div>
          <div className="w-full">
            <button className="bg-red-500 dark:bg-red-500 hover:bg-black dark:hover:bg-black dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300  ">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
