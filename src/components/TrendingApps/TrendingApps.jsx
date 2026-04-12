import Link from "next/link";
import TrendingCards from "./TrendingCards";

const TrendingApps = async () => {
  // fetch data

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* card */}
          {AppsData.slice(0, 8).map((data) => (
            <TrendingCards key={data.id} data={data} />
          ))}
        </div>
      </div>
      <Link href={"/apps"} className="flex justify-center items-center pt-10">
        <button className=" btn text-xl rounded-lg bg-purple-500 text-white">
          See More
        </button>
      </Link>
    </div>
  );
};

export default TrendingApps;
