import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import gsap from 'gsap';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuListRef = useRef(null);

  useEffect(() => {
    if (isOpen && window.innerWidth < 1024) {
      gsap.fromTo(
        menuListRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  return (
    <header className="shadow-md sticky z-50 top-0">
      <nav className="bg-[#090008] border-gray-200 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center text-white text-lg font-bold">
            Simran Kaur
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white lg:hidden text-2xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Desktop Button */}
          <div className="hidden lg:flex items-center lg:order-2">
            <Link
              to="https://wa.me/918053725999?text=Hi%20Simran%2C%20I%20just%20visited%20your%20portfolio%20and%20would%20love%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow bg-white text-black hover:bg-black hover:text-white font-medium rounded-lg text-sm px-4 py-2.5 mr-2 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Navigation Links */}
          <div className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1`}>
            <ul
              ref={menuListRef}
              className="flex flex-col font-medium lg:flex-row lg:space-x-0 mt-4 lg:mt-0 text-white lg:items-center"
            >
              {['/', '/projects', '/about', '/contact'].map((path, index, array) => {
                const label = ['Home', 'Projects', 'About', 'Contact Me'][index];
                return (
                  <React.Fragment key={path}>
                    <li className="lg:px-3">
                      <NavLink
                        to={path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `nav-underline relative block py-2 pr-4 pl-3 duration-200 ${
                            isActive ? 'text-white font-semibold' : 'text-white'
                          } hover:text-white-400 shadow-lg`
                        }
                      >
                        {label}
                      </NavLink>
                    </li>
                    {index < array.length - 1 && (
                      <span className="hidden lg:inline text-white text-xl">|</span>
                    )}
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
