import React, { useState } from "react";

const FeaturesTab = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(1);

  // Tab data stored in an array
  const tabs = [
    {
      id: 1,
      title: "Grammar & Spelling",
      image: "/images/grammarly-1.webp",
      description:
        "Avoid embarrassing mistakes with real-time grammar and spelling corrections.",
    },
    {
      id: 2,
      title: "Simplify Your Tone",
      image: "/images/grammarly-2.webp",
      description:
        "Make your writing more concise and clear with tone adjustment suggestions.",
    },
    {
      id: 3,
      title: "Style & Clarity",
      image: "/images/grammarly-3.webp",
      description:
        "Enhance readability with smart style and clarity improvements.",
    },
  ];

  return (
    <section className="container">
      <div className="relative my-6 mb-32 mt-12 px-6 mx-auto">
        <div className="bg-tabs"></div>

        {/* TABS */}
        <div className="flex flex-col justify-center max-w-xl mx-auto border-b md:space-x-10 md:flex-row items-center">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`flex justify-center text-center mx-auto border-b md:border-b-0 cursor-pointer w-full md:w-1/3 whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-b-4 border-chromeGreen text-black"
                  : "hover:text-chromeGreen"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="py-5">{tab.title}</div>
            </div>
          ))}
        </div>

        {/* TAB PANELS - Render only the active panel */}
        <div className="mx-auto">
          {tabs.map((tab) =>
            activeTab === tab.id ? (
              <div
                key={tab.id}
                className="flex flex-col items-center py-5 md:flex-row md:space-x-7 panel"
              >
                {/* Panel Image */}
                <div className="flex justify-center md:w-1/2">
                  <img
                    src={tab.image}
                    alt={tab.title}
                    className="relative z-10 mx-auto"
                  />
                </div>
                {/* Panel Content */}
                <div className="flex flex-col space-y-8 md:w-1/2 ">
                  <h3 className="text-4xl font-semibold text-center md:mt-0 md:text-left">
                    {tab.title}
                  </h3>
                  <p className="max-w-md text-center md:text-left">
                    {tab.description}
                  </p>
                  <button className="btn block mx-auto mt-4 md:ml-0">
                    Get Started
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturesTab;
