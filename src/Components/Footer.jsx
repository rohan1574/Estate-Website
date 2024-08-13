import React, { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUp, FaMoon, FaSun } from "react-icons/fa";
const Footer = () => {
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
    
     <div>
         <footer className={`${
        darkMode ? "dark bg-black" : " bg-base-200  "
      } footer text-base-content p-10`} >
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      {/* slide-top-button */}
      <div id="icon-box" className="bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6">
        <Link to="hero" spy={true} offset={-100} smooth={true}>
        <FaArrowUp className="size-6 text-white "></FaArrowUp>
        </Link>
      </div>
      {/* dark-toggle-button */}
      <div>
        <button onClick={toggleDarkMode} className="flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6 ">
            {darkMode ? <FaMoon size={25} className="text-black"></FaMoon> : <FaSun size={25} className="text-black"></FaSun> }
        </button>
      </div>
     </div>
    
  );
};

export default Footer;
