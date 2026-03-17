"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneIcon, ChevDownIcon, MenuIcon, XIcon } from "./icons";

const FACILITY_LINKS = [
  { label: "RCFEs & Assisted Living", href: "/rcfe" },
  { label: "Hospice & Palliative Care", href: "/hospice" },
  { label: "Home Health", href: "/home-health" },
  { label: "Adult Day Health Centers", href: "/adult-day" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [facDrop, setFacDrop] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const showWhiteBg = scrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showWhiteBg
          ? "bg-white/[0.97] backdrop-blur-xl shadow-[0_1px_16px_rgba(0,0,0,0.06)]"
          : ""
      }`}
      style={{ padding: showWhiteBg ? "10px 0" : "16px 0" }}
    >
      <div className="max-w-[1100px] mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div
            className={`w-[34px] h-[34px] rounded-lg flex items-center justify-center font-bold text-[15px] font-serif text-white transition-all duration-300 ${
              showWhiteBg ? "bg-teal" : "bg-white/15"
            }`}
          >
            W
          </div>
          <span
            className={`font-bold text-[15px] transition-colors duration-300 ${
              showWhiteBg ? "text-navy" : "text-white"
            }`}
          >
            Western Ave Pharmacy
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          <Link
            href="/"
            className={`nav-link ${!showWhiteBg ? "!text-white/80" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`nav-link ${!showWhiteBg ? "!text-white/80" : ""}`}
          >
            Services
          </Link>

          {/* Facilities Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setFacDrop(true)}
            onMouseLeave={() => setFacDrop(false)}
          >
            <button
              className={`nav-link flex items-center gap-1 ${
                !showWhiteBg ? "!text-white/80" : ""
              }`}
            >
              Facilities <ChevDownIcon />
            </button>
            {facDrop && (
              <div className="drop">
                {FACILITY_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="drop-item"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={`nav-link ${!showWhiteBg ? "!text-white/80" : ""}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`nav-link ${!showWhiteBg ? "!text-white/80" : ""}`}
          >
            Contact
          </Link>

          <a
            href="tel:8187474000"
            className={`flex items-center gap-1.5 font-semibold text-sm no-underline transition-colors duration-300 ${
              showWhiteBg ? "text-teal" : "text-[#4dd4f0]"
            }`}
          >
            <PhoneIcon /> (818) 747-4000
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden bg-transparent border-none cursor-pointer ${
            showWhiteBg ? "text-navy" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <div className="flex flex-col gap-2 pl-0">
            <span className="text-xs font-semibold text-text-light uppercase tracking-wider">Facilities</span>
            {FACILITY_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link pl-3"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <a
            href="tel:8187474000"
            className="flex items-center gap-1.5 font-semibold text-teal text-sm no-underline"
          >
            <PhoneIcon /> (818) 747-4000
          </a>
        </div>
      )}
    </nav>
  );
}
