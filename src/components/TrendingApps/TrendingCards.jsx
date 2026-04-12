import Image from "next/image";
import React from "react";
import { FaDownload, FaRegStar } from "react-icons/fa";

const TrendingCards = ({ data }) => {
  const { image, title, ratingAvg, downloads } = data;

  const formatDownloads = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num;
  };
  return (
    <div className="card bg-base-100 shadow-md rounded-2xl hover:shadow-xl transition-all border border-gray-100">
      <figure className="p-4 pb-0">
        {/* Rounded corners on the image container to match the screenshot */}
        <div className="relative w-full h-64 bg-gray-200 rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </figure>

      <div className="card-body p-5">
        <h2 className="card-title text-2xl font-bold text-slate-800">
          {title}
        </h2>

        <div className="card-actions justify-between mt-4">
          {/* Download Badge */}
          <div className="flex items-center gap-1 bg-green-50 text-emerald-500 px-3 py-1 rounded-md font-semibold">
            <FaDownload className="text-xs" />
            <span>{formatDownloads(downloads)}</span>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-1 bg-orange-50 text-orange-500 px-3 py-1 rounded-md font-semibold">
            <FaRegStar className="text-xs" />
            <span>{ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCards;
