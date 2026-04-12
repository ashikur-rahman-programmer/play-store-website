import TrendingCards from "@/components/TrendingApps/TrendingCards";
import Link from "next/link";

const AppsPage = async () => {
  const res = await fetch("http://localhost:3000/AppsData.json");
  const AppsData = await res.json();

  return (
    <div className=" bg-gray-100 py-20">
      <div className="container mx-auto space-y-10 ">
        <div className="space-y-4 text-center">
          <h2 className="text-5xl font-bold">Trending Apps</h2>
          <p className="text-gray-500 text-lg">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        {/*  found apps */}
        <div className="flex justify-between gap-6 items-center ">
          <span className="text-xl font-semibold  tracking-tight">
            Apps Found
          </span>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* card */}
          {AppsData.map((data) => (
            <TrendingCards key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppsPage;
