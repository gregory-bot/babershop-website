import React, { useState, useEffect, useRef } from "react";
import { Scissors } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = ["Home", "Services", "Book Now", "About", "Contact"];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-white" />{" "}
            {/* Logo color is white */}
            <span
              className="text-xl font-bold text-white"
              style={{ fontFamily: "Courier New, monospace" }} // Apply the font
            >
              Benji's fade
            </span>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="block lg:hidden text-white focus:outline-none rounded-full bg-gray-200 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open Menu</span>
            <div className="space-y-1">
              <div className="w-6 h-1 bg-black"></div>
              <div className="w-6 h-1 bg-black"></div>
              <div className="w-6 h-1 bg-black"></div>
            </div>
          </button>

          {/* Navigation Sidebar */}
          <div
            ref={sidebarRef}
            className={`fixed top-0 left-0 h-full w-64 bg-blue-600 text-white transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden`}
          >
            <button
              className="text-white absolute top-4 right-4 focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="sr-only">Close Menu</span>✕
            </button>
            <div className="flex flex-col mt-16 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-lg font-medium hover:bg-blue-500 hover:text-yellow-400 px-6 py-2 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links for Large Screens */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-white hover:text-blue-600 transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
