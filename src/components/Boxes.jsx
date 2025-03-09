import React from "react";

const Boxes = () => {
  return (
    <section className="container">
      <div className="px-6">
        <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
          Download the extension
        </h2>
        <img
          className="mx-auto w-fit h-64 sm:h-96"
          src="/images/grammarly-5.webp"
          alt=""
        />
        {/* <p className="max-w-lg mx-auto text-center">
          Boost your writing with Grammarly’s free browser extension! Whether
          you’re composing emails, crafting social media posts, or working on
          important documents, Grammarly helps you write clearer, mistake-free,
          and more professional content in real time.
        </p> */}
      </div>
      <div className="py-32">
        {/* BOXES */}
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          {/* BOX 1 - CHROME */}
          <div className="flex flex-col w-full px-4 py-6 space-y-4 text-center bg-gradient-to-b from-[#0fa37e] to-[#5fd5b1] rounded-lg shadow-lg md:w-1/3">
            {/* IMAGE */}
            <div className="flex justify-center items-center gap-2">
              <img className="w-12 h-12" src="/images/logo-chrome.svg" alt="" />
              <h5 className="text-xl font-bold">Extension</h5>
            </div>

            <button className="btn min-w-[140px] max-w-full w-auto mx-auto flex items-center justify-center whitespace-nowrap overflow-hidden">
              Add to Chrome
            </button>
          </div>

          {/* BOX 2 - DESKTOP */}
          <div className="flex flex-col w-full py-6 space-y-4 text-center bg-gradient-to-b from-[#0fa37e] to-[#5fd5b1] rounded-lg shadow-lg md:w-1/3">
            {/* IMAGE */}
            <div className="flex justify-center items-center gap-2">
              <img
                className="w-12 h-12"
                src="/images/windows-logo.png"
                alt=""
              />
              {/* TEXT */}
              <h5 className=" text-xl font-bold">Windows</h5>
            </div>
            <button className="btn w-fit mx-auto">Download </button>
          </div>

          {/* BOX 3 - MAC */}
          <div className="flex flex-col w-full py-6 space-y-4  bg-gradient-to-b from-[#0fa37e] to-[#5fd5b1] text-center rounded-lg shadow-lg md:w-1/3">
            {/* IMAGE */}
            <div className="flex justify-center items-center gap-2">
              <img
                className="w-12 h-12"
                src="/public/images/logo-opera.svg"
                alt=""
              />
              {/* TEXT */}
              <h5 className=" text-xl font-bold">Opera</h5>
            </div>
            <button className="btn w-fit mx-auto">Download </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
