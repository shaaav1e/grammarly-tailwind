import React from "react";

const FeatuesTab = () => {
  return (
    <section>
      <div className="relative my-6 mb-32 mt-12 px-6 mx-auto">
        <div className="bg-tabs"></div>
        {/* TABS FLEX */}
        <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
          {/* TAB 1 */}
          <div className="flex justify-center text-center mx-auto border-b md:border-b-0 hover:text-softRed tab w-1/3">
            <div className="py-5 border-b-4 border-softRed">
              Grammar & Spelling
            </div>
          </div>

          {/* TAB 2 */}
          <div className="flex justify-center text-center mx-auto border-b md:border-b-0 hover:text-softRed tab w-1/3">
            <div className="py-5 ">Style & Clarity</div>
          </div>

          {/* TAB 3 */}
          <div className="flex justify-center text-center mx-auto border-b md:border-b-0 hover:text-softRed tab w-1/3">
            <div className="py-5">Plagiarism Checker</div>
          </div>
        </div>

        {/* Tab Panels */}
      </div>
    </section>
  );
};

export default FeatuesTab;
