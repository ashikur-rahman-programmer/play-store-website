import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B0F19] text-slate-400 border-t border-slate-800/50 font-sans">
      <div className="container mx-auto pt-16 pb-8 px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          {/* Brand & Mission Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-black tracking-tighter text-white italic">
                HERO<span className="text-purple-500">.IO</span>
              </h2>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              At <span className="text-white font-medium">HERO.IO</span>, we
              craft innovative apps designed to make everyday life simpler,
              smarter, and more exciting.
            </p>
            <div className="flex gap-4">
              <SocialBtn icon={<FaFacebookF />} />
              <SocialBtn icon={<FaTwitter />} />
              <SocialBtn icon={<FaInstagram />} />
              <SocialBtn icon={<FaLinkedinIn />} />
            </div>
          </div>

          {/* Navigation Links - Play Store Style Categories */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h6 className="text-white font-semibold text-sm uppercase tracking-widest">
                Our Apps
              </h6>
              <ul className="space-y-3 text-sm">
                <li>
                  <FooterLink label="Productivity" />
                </li>
                <li>
                  <FooterLink label="Innovation" />
                </li>
                <li>
                  <FooterLink label="Smart Tools" />
                </li>
                <li>
                  <FooterLink label="New Releases" />
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h6 className="text-white font-semibold text-sm uppercase tracking-widest">
                Company
              </h6>
              <ul className="space-y-3 text-sm">
                <li>
                  <FooterLink label="About HERO.IO" />
                </li>
                <li>
                  <FooterLink label="Our Mission" />
                </li>
                <li>
                  <FooterLink label="Careers" />
                </li>
                <li>
                  <FooterLink label="Press Kit" />
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h6 className="text-white font-semibold text-sm uppercase tracking-widest">
                Support
              </h6>
              <ul className="space-y-3 text-sm">
                <li>
                  <FooterLink label="Help Center" />
                </li>
                <li>
                  <FooterLink label="Privacy Policy" />
                </li>
                <li>
                  <FooterLink label="Terms of Service" />
                </li>
                <li>
                  <FooterLink label="Contact Us" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[13px] text-slate-500">
            © 2026 <span className="text-slate-300">HERO.IO</span>. Making an
            impact, one app at a time.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#0B0F19] bg-slate-800 flex items-center justify-center overflow-hidden"
                >
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                </div>
              ))}
            </div>
            <p className="text-[13px] font-medium text-slate-400">
              Trusted by 500k+ users
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Sub-components for a cleaner build
const FooterLink = ({ label }) => (
  <a className="hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center group">
    <span className="w-0 group-hover:w-1.5 h-1.5 rounded-full bg-purple-500 mr-0 group-hover:mr-2 transition-all"></span>
    {label}
  </a>
);

const SocialBtn = ({ icon }) => (
  <a className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-purple-600 hover:border-purple-500 hover:text-white transition-all duration-300 cursor-pointer shadow-lg">
    {icon}
  </a>
);

export default Footer;
