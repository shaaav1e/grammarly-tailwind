import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-gradient-to-b from-[#0fa37e] to-[#5fd5b1]">
      <div className="max-w-lg mx-auto py-24">
        <p className="mb-6 text-lg tracking-widest text-center text-white uppercase">
          <span className="lg:text-3xl lg:font-bold">36000+ </span>ALREADY
          JOINED
        </p>
        <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
          Stay up-to-date with what we're doing
        </h2>
        {/* Form */}
        <form
          action=""
          className="flex flex-col items-start justify-center max-w-2xl mx-auto space-y-6 text-base px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0"
        >
          {/* Input */}
          <div className="flex flex-col justify-between items-center mx-auto md:flex-row md:mx-0">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-1 border-white focus:outline-none md:mr-3 md:mb-0"
            />
            <input
              type="submit"
              className="inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none hover:text-chromeGreen hover:bg-white bg-chromeGreen"
              value="Contact Us"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

// <div className="container p-6 section-spacing">
{
  /* <h2 className="font-bold text-2xl text-center">NEWSLETTER</h2>
</div> */
}
