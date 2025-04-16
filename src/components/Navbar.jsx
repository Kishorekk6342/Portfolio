import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-50 bg-transparent`}>
      <div className="flex justify-between items-center w-full max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 object-contain rounded-full"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            KK <span className="hidden sm:inline">&nbsp;| Data Analyst</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`text-[16px] font-medium cursor-pointer ${
                active === link.title ? "text-white" : "text-secondary"
              }`}
            >
              <a href={`#${link.id}`} onClick={() => setActive(link.title)}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex items-center z-50">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Mobile Menu */}
        {toggle && (
          <div className={`sm:hidden absolute top-16 right-2 w-[75vw] max-w-[120px] 
            bg-gradient-to-br from-[#0f0f0f]/80 to-[#1a1a1a]/90 
            border border-[#ffffff1a] backdrop-blur-lg 
            rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.7)] ring-1 ring-violet-500/30
            animate-slide-in p-4 z-50 overflow-hidden transition-all duration-300 ease-in-out`}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`text-[14px] font-semibold text-white cursor-pointer relative group tracking-wide`}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(false);
                    }}
                    className="block w-full"
                  >
                    {link.title}
                    <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-violet-500 transition-all group-hover:w-full duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        )}
      </div>
    </nav>
  );
};

export default Navbar;
