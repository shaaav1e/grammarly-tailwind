import React from "react";

const Boxes = () => {
  return (
    <section>
      <div className="px-6">
        <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
          Download the extension
        </h2>
        <p className="max-w-lg mx-auto text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit saepe, neque, odio consectetur maiores nobis sunt
          praesentium quisquam explicabo at dicta, autem ratione incidunt? Iure.
        </p>
      </div>
      <div className="py-32">
        {/* BOXES */}
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          {/* BOX 1 - CHROME */}
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
            {/* IMAGE */}
            <div className="flex justify-center items-center gap-4">
              <img
                className="w-12 h-12"
                src="/src/assets/images/logo-chrome.svg"
                alt=""
              />
              {/* TEXT */}
              <h5 className=" text-xl font-bold">Extension</h5>
            </div>
            <button className="btn w-fit mx-auto">Add to Chrome</button>
          </div>

          {/* BOX 2 - DESKTOP */}
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
            {/* IMAGE */}
            <div className="flex justify-center items-center gap-4">
              <img
                className="w-12 h-12"
                src="/src/assets/images/windows-logo.png"
                alt=""
              />
              {/* TEXT */}
              <h5 className=" text-xl font-bold">Windows</h5>
            </div>
            <button className="btn w-fit mx-auto">Download </button>
          </div>

          {/* BOX 3 - MAC */}
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
            {/* IMAGE */}
            <div className="flex justify-center items-center gap-4">
              <img
                className="w-12 h-12"
                src="/src/assets/images/mac-logo.webp"
                alt=""
              />
              {/* TEXT */}
              <h5 className=" text-xl font-bold">MAC</h5>
            </div>
            <button className="btn w-fit mx-auto">Download </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
