import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container relative p-6">
      {/* Flex for Nav Items */}
      <div className="flex items-center justify-between my-6">
        {/* Logo image with fixed size */}
        <div className="z-30 flex-shrink-0">
          <img
            className="w-14 h-20 min-w-[3.5rem]"
            src="/images/grammarly-logo.svg"
            alt="Grammarly Logo"
          />
        </div>

        {/* Desktop Menu with flex-grow to take available space */}
        <div className="hidden items-center justify-end space-x-10 uppercase text-grayish-Blue md:flex flex-grow">
          <a href="#" className="tracking-wideset">
            Pricing
          </a>
          <a href="#" className="tracking-wideset">
            Download
          </a>
          <a href="#" className="tracking-wideset">
            FAQ
          </a>
          <a
            href=""
            className="px-8 py-2 text-white bg-chromeGreen border-2 border-chromeGreen rounded-lg shadow-md hover:bg-white hover:text-chromeGreen"
          >
            Login
          </a>
        </div>

        {/* Hamburger Menu Button (Mobile only) */}
        <button
          onClick={toggleMenu}
          className="z-30 block md:hidden focus:outline-none text-2xl text-grammarlyGray ml-auto"
          aria-label="Toggle menu"
        >
          <i className={isMenuOpen ? "ri-close-line" : "ri-menu-5-line"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-30  left-0 right-0 z-20 mx-4 rounded-lg shadow-lg bg-grammarlyDarkGreen md:hidden">
          <div className="flex flex-col items-center py-6 space-y-6 uppercase">
            <a
              href="#"
              className="tracking-wideset text-grammarlyGray hover:text-chromeGreen"
            >
              Pricing
            </a>
            <a
              href="#"
              className="tracking-wideset text-grammarlyGray hover:text-chromeGreen"
            >
              Download
            </a>
            <a
              href="#"
              className="tracking-wideset text-grammarlyGray hover:text-chromeGreen"
            >
              FAQ
            </a>
            <a
              href=""
              className="px-8 py-2 text-white bg-chromeGreen border-2 border-chromeGreen rounded-lg shadow-md hover:bg-grammarlyGray hover:text-chromeGreen"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
