// import InstalledCard from "@/components/InstalledCard/InstalledCard";
// import React from "react";

// const InstallationPage = () => {
//   return (
//     <div className="container mx-auto px-4 lg:px-20">
//       {/* Header Section */}
//       <div className="text-center mb-10">
//         <h2 className="text-4xl font-bold text-[#0F172A] mb-2">
//           Your Installed Apps
//         </h2>
//         <p className="text-gray-500">
//           Explore All Trending Apps on the Market developed by us
//         </p>
//       </div>

//       {/* Filter & Search Bar */}
//       <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-t-xl border-x border-t border-gray-100 shadow-sm gap-4">
//         <h3 className="text-xl font-bold text-[#0F172A]">
//           {installedData.length}{" "}
//           <span className="font-medium text-gray-500">Apps Found</span>
//         </h3>

//         <div className="flex items-center gap-2">
//           <select className="select select-sm bg-gray-50 border-gray-200 text-gray-600 rounded-md focus:outline-none">
//             <option>Sort By Size</option>
//             <option>Newest</option>
//             <option>Top Rated</option>
//           </select>
//         </div>
//       </div>

//       {/* Apps List Container */}
//       <div className="flex flex-col border border-gray-100 bg-white rounded-b-xl shadow-sm overflow-hidden">
//         {installedData.map((app) => (
//           <InstalledCard key={app.id} app={app} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InstallationPage;
