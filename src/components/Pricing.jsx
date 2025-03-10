import React from "react";

const Pricing = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center">
        <div className="flex flex-col my-6 space-y-6 md:space-y-6 lg:flex-row lg:space-x-4 lg:space-y-0">
          {/* Col 1 - Free */}
          <div className="rounded-xl text-black bg-green-200 lg:w-1/3 flex flex-col">
            {/* Upper Part */}
            <div className="p-6 mx-3 mt-3 mb-3 rounded-sm bg-white flex-1 flex flex-col">
              <div className="">
                <div className="text-center uppercase md:text-left text-sm">
                  For individuals
                </div>
                <h2 className="mt-10 font-serif text-5xl text-center md:text-left">
                  Free
                </h2>
                <p className="mt-10 text-center md:text-left">
                  Get peace of mind with writing that's mistake-free and
                  consistent.
                </p>
                <p className="mt-10 font-semibold text-5xl text-center md:text-left">
                  $0<span className="text-sm">USD</span>
                </p>
              </div>

              <div className="lg:mt-25 mt-3">
                <button className="btn-pricing block mx-auto w-full whitespace-nowrap">
                  Create Account
                </button>
              </div>

              <div className="mt-10">
                <div className="flex items-center mt-4 gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  <p>Write without mistakes</p>
                </div>
                <div className="flex items-center mt-4 gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  <p>See your writing tone</p>
                </div>
                <div className="flex items-center mt-4 gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  <p>Generate text with AI prompts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2 - Pro (will be on top in flex-col) */}
          <div className="rounded-xl text-black bg-green-200 lg:w-1/3 order-first lg:order-none flex flex-col">
            {/* Upper Part */}
            <div className="p-6 mx-3 mt-3 mb-3 rounded-sm bg-white flex-1 flex flex-col">
              <div className="">
                <div className="text-center uppercase md:text-left text-sm">
                  For individuals or teams
                </div>
                <h2 className="mt-10 font-serif text-5xl text-center md:text-left">
                  Pro
                </h2>
                <p className="mt-10 text-center md:text-left">
                  Deliver impactful writing, whether working alone or as a team.
                </p>
                <p className="mt-10 font-semibold text-5xl text-center md:text-left">
                  $12<span className="text-sm">USD</span>
                </p>
                <p className="text-sm">
                  / member / month, billed annually
                  <span>
                    <br />
                    <span className="font-bold">$30</span> when billed monthly
                    <br />
                  </span>
                </p>
              </div>

              <div className="lg:mt-15 mt-4">
                <button className="btn block mx-auto w-full whitespace-nowrap">
                  Get Started
                </button>
              </div>

              <div className="mt-10">
                <div className="flex items-center mt-4 gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  <p className="font-bold">Everything included in Free</p>
                </div>
                <div className="flex items-center mt-4 gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  <p>Rewrite full sentences</p>
                </div>
                <div className="flex items-center mt-4 gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  <p>Adjust your writing tone</p>
                </div>
                <div className="flex items-center mt-4 gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  <p>Stay on-brand</p>
                </div>
                <div className="flex items-center mt-4 gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  <p>Generate text with 2,000 AI prompts</p>
                </div>
              </div>
            </div>
          </div>
          {/* Col 3 - Enterprise */}
          <div className="rounded-xl text-black bg-green-200 lg:w-1/3 flex flex-col">
            {/* Upper Part */}
            <div className="p-6 mx-3 mt-3 mb-3 rounded-sm bg-white flex-1 flex flex-col">
              <div className="">
                <div className="text-center uppercase md:text-left text-sm">
                  For larger organizations
                </div>
                <h2 className="mt-10 font-serif text-5xl text-center md:text-left">
                  Enterprise
                </h2>
                <p className="mt-10 text-center md:text-left">
                  Drive results across your entire organization with trusted AI.
                </p>
                <p className="mt-10 font-semibold text-5xl text-center md:text-left invisible">
                  hidden
                </p>
              </div>

              <div className="lg:mt-25 mt-3">
                <button className="btn-pricing block mx-auto w-full whitespace-nowrap">
                  Contact Sales
                </button>
              </div>

              <div className="mt-10">
                <div className="flex items-center mt-4 gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  <p className="font-bold">Everything included in Pro</p>
                </div>
                <div className="flex items-center mt-4 gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  <p>Unlimited members</p>
                </div>
                <div className="flex items-center mt-4 gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  <p>Dedicated support</p>
                </div>
                <div className="flex items-center mt-4 gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  <p>Confidential mode</p>
                </div>
                <div className="flex items-center mt-4 gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  <p>Data loss prevention</p>
                </div>
                <div className="flex items-center mt-4 gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  <p>Unlimited generative AI prompts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
