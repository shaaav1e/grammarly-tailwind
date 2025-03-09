import React from "react";

const Hero = () => {
  return (
    <section className="container">
      <div className="flex flex-col-reverse p-6 lg:flex-row lg:mb-0">
        {/* Content */}

        <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
          <h1 className="text-3xl font-semibold text-center lg:text-4xl lg:text-left">
            Enhance Your Writing with AI-Powered Assistance
          </h1>
          <p className=" text-lg  lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
            Write with confidence using advanced grammar, spelling, and style
            suggestions. Whether you're drafting an email, crafting an article,
            or chatting online, our smart extension helps you communicate
            clearly and effectively.
          </p>

          {/* Buttons  */}
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center lg:justify-start">
            {/* <a
              href=""
              className="p-4 text-sm font-semibold text-white bg-chromeGreen rounded shadow-md border-chromeGreen border-2 md:text-base hover:bg-white hover:text-chromeGreen"
            >
              Get It On Chrome
            </a> */}
            <button className="google-btn w-fit mx-auto md:mx-0">
              <div className="google-btn-state"></div>
              <div className="flex items-center w-full">
                <div className="google-btn-icon">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    ></path>
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    ></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </svg>
                </div>
                <span className="google-btn-content">Get Chrome Extension</span>
              </div>
            </button>
            {/* <a
              href=""
              className="w-fit px-6 py-2 max-w-[400px] min-w-min mx-auto text-sm font-semibold rounded-sm shadow-md md:text-base bg-firefox text-white border-firefox border-2 
             hover:bg-white hover:text-orange-500 
             flex items-center justify-center whitespace-nowrap"
            >
              Get Firefox Extension
            </a> */}
          </div>
        </div>

        {/* Image */}
        <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          <div className="bg-hero"></div>
          <img
            src="/images/hero-grammarly.png"
            alt=""
            className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
