import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col-reverse p-6 lg:flex-row lg:mb-0">
        {/* Content */}

        <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
          <h1 className="text-3xl font-semibold text-center lg:text-4xl lg:text-left">
            Enhance Your Writing with AI-Powered Assistance
          </h1>
          <p className=" text-lg text-center  lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
            Write with confidence using advanced grammar, spelling, and style
            suggestions. Whether you're drafting an email, crafting an article,
            or chatting online, our smart extension helps you communicate
            clearly and effectively.
          </p>

          {/* Buttons  */}
          <div className="flex justify-center space-x-4 lg:justify-start">
            <a
              href=""
              className="p-4 text-sm font-semibold text-white bg-chromeGreen rounded shadow-md border-chromeGreen border-2 md:text-base hover:bg-white hover:text-chromeGreen"
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
            src="./src/assets/images/hero-grammarly.png"
            alt=""
            className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
