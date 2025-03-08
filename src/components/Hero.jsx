import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col-reverse p-6 lg:flex-row lg:mb-0">
        {/* Content */}

        <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
          <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
            A Simple BookMark Manager
          </h1>
          <p className=" text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
            Save your favorite websites effortlessly with our Bookmark Chrome
            Extension. Quickly add, organize, and access your bookmarks in one
            click—no more endless searching for saved links!
          </p>

          {/* Buttons  */}
          <div className="flex justify-center space-x-4 lg:justify-start">
            <a
              href=""
              className="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-softBlue border-2 md:text-base hover:bg-white hover:text-softBlue"
            >
              Get It On Chrome
            </a>
            <a
              href=""
              className="p-4 text-sm font-semibold 0 rounded shadow-md md:text-base bg-firefox text-white border-firefox border-2 hover:bg-white hover:text-orange-500"
            >
              Get It On Firefox
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          <div className="bg-hero"></div>
          <img
            src="/src/images/illustration-hero.svg"
            alt=""
            className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
{
  /* <div className="flex justify-center space-x-4 lg:justify-start">
            <button className="px-6 py-3 text-white bg-cyan-600 rounded-lg">
              Get it on Chrome
            </button>
            <button className="px-6 py-3 text-cyan-600 bg-gray-100 rounded-lg">
              Get it on Firefox
            </button>
          </div>
        </div> */
}
