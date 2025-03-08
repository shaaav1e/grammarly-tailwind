import React from "react";

const Navbar = () => {
  return (
    <nav className="relative p-6">
      {/* Flex for Nav Items */}
      <div className="flex items-center justify-between space-x-20 my-6">
        {/* Logo image to be on top always */}
        <div className="z-30">
          <img
            className="max-w-fit"
            src="/src/assets/images/logo-bookmark.svg"
            alt=""
          />
        </div>
        <div className="hidden items-center space-x-10 uppercase text-grayish-Blue md:flex">
          <a href="#" className="tracking-wideset hover:text-softBlue">
            Features
          </a>
          <a href="#" className="tracking-wideset hover:text-softBlue">
            Download
          </a>
          <a href="#" className="tracking-wideset hover:text-softBlue">
            FAQ
          </a>
          <a
            href=""
            className="px-8 py-2 text-white bg-softBlue border-softBlue border-2 rounded-lg shadow-md hover:text-softBlue hover:bg-white"
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
