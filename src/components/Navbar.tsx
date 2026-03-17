"use client";

import { useState, useEffect } from "react";
import { PhoneIcon, MenuIcon, XIcon } from "./icons";

const NAV_ITEMS = ["Home", "Services", "Facilities", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.08)] py-3"
          : "py-[18px]"
      }`}
    >
      <div className="max-w-[1100px] mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-base font-serif text-white transition-all duration-300 ${
              scrolled ? "bg-teal" : "bg-white/15"
            }`}
          >
            W
          </div>
          <span
            className={`font-bold text-base tracking-tight transition-colors duration-300 ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            Western Ave Pharmacy
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-7 items-center">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={`text-[15px] font-medium bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-teal ${
                scrolled ? "text-text-light" : "text-white/80"
              }`}
            >
              {item}
            </button>
          ))}
          <a
            href="tel:8187474000"
            className={`flex items-center gap-1.5 font-semibold text-[15px] no-underline transition-colors duration-300 ${
              scrolled ? "text-teal" : "text-[#4dd4f0]"
            }`}
          >
            <PhoneIcon /> (818) 747-4000
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden bg-transparent border-none cursor-pointer ${
            scrolled ? "text-navy" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-left text-[15px] font-medium text-text-light bg-transparent border-none cursor-pointer hover:text-teal"
            >
              {item}
            </button>
          ))}
          <a
            href="tel:8187474000"
            className="flex items-center gap-1.5 font-semibold text-teal text-[15px] no-underline"
          >
            <PhoneIcon /> (818) 747-4000
          </a>
        </div>
      )}
    </nav>
  );
}
