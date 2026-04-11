"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const pathName = usePathname();
  const links = (
    <>
      <li>
        <Link
          className={`pb-2 ${pathName === "/" && "text-green-500 border-b border-green-600"}`}
          href={"/"}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`pb-2 ${pathName === "/apps" && "text-green-500 border-b border-green-600"}`}
          href={"/apps"}
        >
          Apps
        </Link>
      </li>
      <li>
        <Link
          className={`pb-2 ${pathName === "/installation" && "text-green-500 border-b border-green-600"}`}
          href={"/installation"}
        >
          Installation
        </Link>
      </li>
    </>
  );
  return (
    <div className=" shadow">
      <div className="container mx-auto py-3 flex justify-between items-center gap-6">
        <figure>
          <Image
            src={"/assets/logo.png"}
            width={50}
            height={50}
            alt="navbar image"
          ></Image>
        </figure>
        <ul className="flex justify-between items-center gap-6 font-semibold">
          {links}
        </ul>
        <button className="flex items-center gap-2 font-semibold bg-purple-600 text-white py-2 px-4 rounded-lg">
          <FaGithub /> Contribute
        </button>
      </div>
    </div>
  );
};

export default Navbar;
