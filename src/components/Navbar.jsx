import { useState } from "react";
import logo from "../assets/logo.png";
import Menu from "./Sidebar.jsx";
import { ThemeContext } from "../Context/theme";
import { useContext } from "react";

const Navbar = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex flex-col md:flew-row justify-evenly items-center  ">
        <div className="flex items-center">
          <div>
            <label className="switch md:mx-6 lg:mx-16">
              <input type="checkbox" onClick={toggleTheme} />
              <span
                tabIndex={0}
                className={`slider round ${
                  dark ? "before:content-sun" : "before:content-moon"
                }`}
              ></span>
            </label>
          </div>
          <div>
            <a href="/">
              <img src={logo} alt="Katie Perry" className="w-2/3 nav-logo" />
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex">
              <a href="#home" className="nav-li">
                Home
              </a>
              <a href="#about" className="nav-li">
                About
              </a>
              <a href="#work" className="nav-li">
                Work
              </a>
              <a href="#contact" className="nav-li">
                Contact
              </a>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke={dark ? "white" : "black"}
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && <Menu />}
      </nav>
    </>
  );
};

export default Navbar;
