import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaFacebook, FaTwitter, FaWhatsapp, FaAngleDown } from "react-icons/fa";
import { MdOutlinePhoneIphone, MdOutlineAttachEmail } from "react-icons/md";
import { Sling as Hamburger } from "hamburger-react";
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition >= 45);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = [
    { path: "/", link: "HOME" },
    { 
      link: "WHO WE ARE", 
      dropdown: [
        { path: "/about", link: "About NYA" },
        { path: "/about/team", link: "Team" },
      ] 
    },
    { 
      link: "MEDIA", 
      dropdown: [
        { path: "/media", link: "Press Release" },
        { path: "/gallery", link: "Gallery" },
      ] 
    },
    { path: "/contentions", link: "Contentions" },
    { path: "/resources", link: "Resources" },
    { path: "/contact", link: "Contact" },
    { path: "/more", link: "More..." },
  ];

  //const isActive = (path) => location.pathname === path;

  return (
    <header className={`bg-[#FFF9EA] w-full z-50 fixed shadow-md`}>
      <div className={`flex items-center border-b-[.1px] px-5 justify-end ${isScrolled ? 'opacity-0 invisible h-0' : 'opacity-100 visible h-11'} transition-opacity duration-500`}>
        <div className="mr-5 flex items-center"><MdOutlinePhoneIphone className="mr-1"/><h2>0807-370-3001</h2></div>
        <div className="mr-5 flex items-center"><MdOutlineAttachEmail className="mr-1"/><h2>info@nya.com</h2></div>
        <div className="lg:flex gap-4 items-center hidden ml-5">
          <Link to="/" className="hover:text-red-700">
            <FaFacebook />
          </Link>
          <Link to="/" className="hover:text-red-700">
            <FaTwitter />
          </Link>
          <Link to="/" className="hover:text-red-700">
            <FaWhatsapp />
          </Link>
        </div>
      </div>
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="" className={`transition-all duration-500 ease-in-out ${isScrolled ? "w-10 absolute sm:left-28 top-[20px] :left-0" : "w-28 absolute top-[60px] left-12"}`} />
        </Link>

        <ul className="md:flex gap-12 text-sm font-bold hidden">
          {navItem.map(({ path, link, dropdown }) => (
            <li className="relative group py-2" key={link}>
              {dropdown ? (
                <span className="group-hover:text-red-700 flex items-center cursor-pointer">
                  {link} <FaAngleDown className="ml-2" />
                </span>
              ) : (
                <NavLink to={path} className={({ isActive }) => isActive ? "active" : ""}>
                  {link}
                </NavLink>
              )}
              {dropdown && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded hidden flex-col group-hover:block z-50 w-40">
                  {dropdown.map(({ path, link }) => (
                    <li key={path} className="hover:bg-green-400 hover:text-white">
                      <NavLink className="block px-4 py-2" to={path}>
                        {link}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="lg:flex gap-4 items-center hidden">
          <div className={`flex gap-3 ${isScrolled ? 'opacity-100 visible transition-opacity duration-500' : 'opacity-0 invisible'} transition-opacity duration-500`}>
            <Link to="/" className="hover:text-red-700">
              <FaFacebook />
            </Link>
            <Link to="/" className="hover:text-red-700">
              <FaTwitter />
            </Link>
            <Link to="/" className="hover:text-red-700">
              <FaWhatsapp />
            </Link>
          </div>
          <Link to='/donate' className="border-red-500 text-red-500 border-2 px-6 py-2 font-medium rounded hover:bg-red-500 hover:text-white transition-all duration-300 ease-in">
            Donate
          </Link>
        </div>
        {/* mobile menu button */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen}/>
        </div>
      </nav>
      {/* mobile menu items */}
      <div>
        <ul
          className={`md:hidden gap-12 text-sm text-center space-y-4 px-4 py-6 mt-14 bg-white fixed top-0 left-0 w-full transition-opacity duration-200 ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          {navItem.map(({ path, link, dropdown }) => (
            <li className="text-black" key={link}>
              {dropdown ? (
                <>
                  <span className="cursor-pointer">{link}</span>
                  <ul className="space-y-2 mt-2">
                    {dropdown.map(({ path, link }) => (
                      <li key={path}>
                        <NavLink
                          className={({ isActive }) => (isActive ? "active" : "")}
                          onClick={() => setOpen(false)}
                          to={path}
                        >
                          {link}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setOpen(false)}
                  to={path}
                >
                  {link}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;



