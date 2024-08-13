import React, { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import { property } from "../Components/export";
import { MdSpaceDashboard } from "react-icons/md";
import {
  FaBath,
  FaShareAlt,
  FaBed,
  FaUserCircle,
  FaPlus,
  FaMapMarkerAlt,
  FaVideo,
  FaCamera,
  FaHeart,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Properties = () => {
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
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent "}`}>
      <section
        id="properties"
        className="lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10 "
      >
        <div className="flex flex-col justify-center items-start gap-4 ">
          <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
            PROPERTIES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-4xl font-semibold dark:text-white"
          >
            Explore the latest <br /> properties availables
          </h1>
        </div>
        {/* properties grid start */}
        <div
          id="grid-box"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 "
        >
          {property.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl w-full "
            >
              <div
                id="image"
                className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end "
                style={{ backgroundImage: `url(${item.images})` }}
              >
                <div
                  id="top"
                  className="flex justify-between items-end w-full "
                >
                  <div>
                    <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-2xl text-[13px] ">
                      Features
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-3 ">
                    <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-2xl text-[13px] ">
                      Sales
                    </button>
                    <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-2xl text-[13px] ">
                      Active
                    </button>
                  </div>
                </div>
                <div id="bottom" className="flex justify-between items-end w-full ">
                   <div className="flex justify-start items-center gap-2 ">
                    <FaMapMarkerAlt className="size-4 text-white"></FaMapMarkerAlt>
                    <h1 className="text-white">{item.address}</h1>
                   </div>
                   <div className="flex justify-center items-center gap-4 ">
                    <FaVideo className="size-4 text-white"></FaVideo>
                    <FaCamera className="size-4 text-white"></FaCamera>
                   </div>
                </div>
              </div>
              <div className="px-6 py-3 flex flex-col justify-center items-start gap-2 w-full">
                  <h1 className="text-xl text-black font-semibold dark:text-white ">{item.name}</h1>
                  <h1 className="text-xl text-red-500 font-bold dark:text-white ">{item.price}</h1>
                  <p className="dark:text-white">{item.about}</p>
                  <div id="icon" className="flex justify-center items-start gap-4 ">
                  <div className="flex justify-center items-center gap-2">
                        <FaBath className="size-5 text-red-500"></FaBath>
                        <h1 className="dark:text-white">{item.bath}</h1>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <FaBed className="size-5 text-red-500"></FaBed>
                        <h1 className="dark:text-white">{item.bed}</h1>
                    </div>
                    
                    <div className="flex justify-center items-center gap-2">
                        <MdSpaceDashboard className="size-5 text-red-500"></MdSpaceDashboard>
                        <h1 className="dark:text-white">{item.area}</h1>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-gray-200 mt-8 ">
                   
                  </div>
                  <div id="owner" className="flex justify-between items-center w-full mt-2">
                     <div className="flex justify-center items-center gap-2">
                        <FaUserCircle className="size-5 text-red-500"></FaUserCircle>
                        <h1 className="dark:text-white">{item.owner}</h1>
                     </div>
                     <div className="flex justify-center items-center gap-4 ">
                        <div className="p-2 border-2 border-gray-300 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300 ">
                            <FaShareAlt className="size-4 text-red-400"></FaShareAlt>
                        </div>
                        <div className="p-2 border-2 border-gray-300 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300 ">
                            <FaHeart className="size-4 text-red-400"></FaHeart>
                        </div>
                        <div className="p-2 border-2 border-gray-300 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300 ">
                            <FaPlus className="size-4 text-red-400"></FaPlus>
                        </div>
                     </div>
                    </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Properties;
