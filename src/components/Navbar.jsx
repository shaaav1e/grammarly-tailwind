import React from "react";

const Navbar = () => {
  return (
    <nav className="relative p-6">
      {/* Flex for Nav Items */}
      <div className="flex items-center justify-between space-x-20 my-6">
        {/* Logo image to be on top always */}
        <div className="z-30">
          <img
            className="w-14 h-20"
            src="/src/assets/images/grammarly-logo.svg"
            alt=""
          />
        </div>
        <div className="hidden items-center space-x-10 uppercase text-grayish-Blue md:flex">
          <a href="#" className="tracking-wideset ">
            Features
          </a>
          <a href="#" className="tracking-wideset ">
            Download
          </a>
          <a href="#" className="tracking-wideset ">
            FAQ
          </a>
          <a
            href=""
            className="px-8 py-2 text-white border-2 rounded-lg shadow-md  hover:bg-white"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// logo needs to be adjusted for sm screen sizes or maybe do hamburger from md
