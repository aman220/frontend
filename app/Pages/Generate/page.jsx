import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-gray-100 p-5">
        <div className="font-sans align-center text-center w-full">
          <h1 className="font-bold  text-2xl">AI Suggestion</h1>
          <h3 className="text-slate-500 font-sans font-medium text-lg my-5">
            Your one solution to increase savings and limit expenses.
          </h3>
        </div>
        <div className="bg-white p-5 shadow-lg rounded-lg">
          <div className="flex flex-row justify-between">
            <h2 className="font-sans lg:text-xl font-bold sm:text-sm md:text-lg">
              Click to Generate..
            </h2>
            <button className="text-white bg-black shadow-2xl shadow-slate-400 lg:p-2 rounded-lg px-2 sm:p-1 ">
              GENERATE
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-5">
        <div className="bg-white p-5 shadow-lg rounded-lg">
          <h2 className="font-sans text-lg font-bold">AI :</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, sequi.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
