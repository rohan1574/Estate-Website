import React, { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import { client } from "../Components/export";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const Clients = () => {
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
   <div className={`${
    darkMode ? "dark bg-black" : "light bg-transparent "
  } `}>
     <section id="testimonials"
        className='lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl justify-center flex  flex-col items-start lg:px-20 px-6 py-20 gap-20 '
      >
      <div className="flex flex-col justify-center items-start gap-4 ">
        <h1 data-aos='zoom-in' className="text-red-500 dark:text-white">OUR CLIENTS</h1>
        <h1 data-aos='zoom-in' className="text-black text-[40px] font-semibold leading-10 dark:text-white " >What are our clients <br />
        saying about us</h1>
      </div>
      <div id="client-box"  className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full">
        {
            client.map((item, index) =>(
                <div  data-aos="zoom-in"
                data-aos-delay="200"
                key={index} className="bg-white dark:bg-gray-900  flex flex-col justify-center items-start gap-6 p-12 w-full hover:bg-red-100 cursor-pointer ">
                    <div className="flex justify-start items-center w-full gap-4 ">
                        <img className="w-[70px] transform hover:scale-110 transition-transform duration-300 " src={item.image} alt="" />
                        <div className="flex flex-col justify-center items-start gap-1 ">
                            <h1 className="text-xl text-black font-semibold dark:text-white ">{item.name}</h1>
                            <h1 className="text-slate-600 dark:text-white ">{item.text}</h1>
                        </div>
                    </div>
                    <p className="text-md text-justify text-slate-600 dark:text-white">{item.feedback}</p>
                    <div className="flex justify-start items-start gap-2 w-full ">
                        <FaStar className="size-4 text-yellow-400 "></FaStar>
                        <FaStar className="size-4 text-yellow-400 "></FaStar>
                        <FaStar className="size-4 text-yellow-400 "></FaStar>
                        <FaStar className="size-4 text-yellow-400 "></FaStar>
                        <FaStar className="size-4 text-yellow-400 "></FaStar>
                    </div>
                </div>
            ))
        }
      </div>
    </section>
   </div>
  );
};

export default Clients;
