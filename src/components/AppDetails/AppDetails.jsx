import React from "react";
import { FaDownload, FaStar, FaCommentDots } from "react-icons/fa";

const AppDetails = ({ appsData }) => {
  // যদি ডাটা না থাকে তবে লোডিং বা এরর মেসেজ দেখাবে
  // if (!appsData) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <h2 className="text-2xl font-bold text-slate-600">
  //         Loading App Details...
  //       </h2>
  //     </div>
  //   );
  // }

  const ratings = appsData.ratings;

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="container mx-auto max-w-4xl space-y-8">
        {/* Header Section: Info & Stats */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
          {/* App Icon */}
          <div className="w-40 h-40 bg-white border border-gray-100 rounded-3xl flex items-center justify-center p-4 shadow-inner">
            {/* <img
              src={appsData.icon || "/assets/placeholder.png"}
              alt={appsData.title}
              className="w-full h-auto object-contain rounded-2xl"
            /> */}
          </div>

          {/* Details */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-800">
                {appsData.title}
              </h1>
              <p className="text-slate-500 font-medium">
                Developed by{" "}
                <span className="text-purple-600">
                  {appsData.developer || "HERO.IO"}
                </span>
              </p>
            </div>

            <div className="flex justify-center md:justify-start gap-12 text-center border-y border-gray-50 py-4">
              <StatItem
                icon={<FaDownload className="text-emerald-500" />}
                label="Downloads"
                value={appsData.downloads || "0"}
              />
              <StatItem
                icon={<FaStar className="text-orange-500" />}
                label="Rating"
                value={appsData.ratingAvg || "0.0"}
              />
              <StatItem
                icon={<FaCommentDots className="text-purple-500" />}
                label="Reviews"
                value={appsData.reviews || "0"}
              />
            </div>

            <button className="btn bg-emerald-500 hover:bg-emerald-600 text-white border-none px-10 rounded-lg font-bold capitalize shadow-lg shadow-emerald-500/20 transition-all">
              Install Now ({appsData.size || "N/A"}MB)
            </button>
          </div>
        </div>

        {/* Ratings Section */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-6">
            Ratings & Reviews
          </h2>
          <div className="space-y-4">
            {ratings.map((r) => (
              <div key={r.star} className="flex items-center gap-4">
                <span className="text-sm font-semibold text-slate-500 w-10">
                  {r.star} star
                </span>
                <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-full"
                    style={{ width: `${(r.count / 15000) * 100}%` }} // এখানে ১৫০০০ হলো ম্যাক্সিমাম লিমিট
                  ></div>
                </div>
                <span className="text-xs text-slate-400 w-12 text-right">
                  {r.count >= 1000
                    ? (r.count / 1000).toFixed(1) + "k"
                    : r.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-6">
            About this app
          </h2>
          <div className="text-slate-500 leading-relaxed text-[15px] whitespace-pre-line">
            {appsData.description ||
              "No description available for this application."}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Component for Stats
const StatItem = ({ icon, label, value }) => (
  <div className="space-y-1">
    <div className="flex items-center justify-center md:justify-start gap-2">
      {icon}
      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
        {label}
      </span>
    </div>
    <p className="text-2xl font-black text-slate-800">{value}</p>
  </div>
);

export default AppDetails;
