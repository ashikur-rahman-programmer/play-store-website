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
          className={`pb-1 text-xl font-semibold hover:bg-transparent hover:text-green-600 ${pathName === "/" && "text-green-500 border-b border-green-600"}`}
          href={"/"}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`pb-1 text-xl font-semibold hover:bg-transparent hover:text-green-600 ${pathName === "/apps" && "text-green-500 border-b border-green-600"}`}
          href={"/apps"}
        >
          Apps
        </Link>
      </li>
      <li>
        <Link
          className={`pb-1 text-xl font-semibold hover:bg-transparent hover:text-green-600 ${pathName === "/installation" && "text-green-500 border-b border-green-600"}`}
          href={"/installation"}
        >
          Installation
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="w-full bg-white shadow-lg sticky top-0 z-10">
        <div className="container mx-auto navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link href={"/"}>
              <Image
                src={"/assets/logo.png"}
                width={50}
                height={50}
                alt="navbar image"
              ></Image>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <button className="btn flex items-center gap-2 font-semibold bg-purple-600 text-white py-2 px-4 rounded-lg">
              <FaGithub /> Contribute
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
