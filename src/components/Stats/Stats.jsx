import React from "react";

const Stats = () => {
  return (
    <div className="bg-linear-to-l from-purple-500 to-indigo-500 py-20 text-white">
      <div className="container mx-auto flex justify-center items-center flex-col">
        <h3 className="text-4xl text-center md:text-5xl font-semibold mb-10">
          Trusted by Millions, Built for You
        </h3>
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full overflow-x-hidden">
          <div className="stat px-0 place-items-center space-y-2   ">
            <div className="stat-desc text-2xl text-gray-300">
              Total Downloads
            </div>
            <div className="stat-value text-5xl">29.6M</div>
            <div className="stat-desc text-2xl text-gray-300">
              21% more than last month
            </div>
          </div>

          <div className="stat px-0 place-items-center space-y-2 ">
            <div className="stat-desc text-2xl text-gray-300">
              Total Reviews
            </div>
            <div className="stat-value text-5xl">906K</div>
            <div className="stat-desc text-2xl text-gray-300">
              46% more than last month
            </div>
          </div>

          <div className="stat px-0 place-items-center space-y-2 ">
            <div className="stat-desc text-2xl text-gray-300">Active Apps</div>
            <div className="stat-value text-5xl">132+</div>
            <div className="stat-desc text-2xl text-gray-300">
              31 more will Launch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
