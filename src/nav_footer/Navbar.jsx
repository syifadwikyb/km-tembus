import React, { useState, useRef, useEffect } from "react";
import logo from "./../assets/logo_kmtembus.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = (event) => {
    event.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    const handleScroll = () => {
      setIsNavbarScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isNavbarScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-6 lg:px-0 lg:py-6">
        <a href="/">
          <img className="h-12 w-auto md:h-14 lg:h-16" src={logo} />
        </a>
        <button
          id="menuToggle"
          onClick={toggleMenu}
          className="lg:hidden text-2xl focus:outline-none ml-auto"
        >
          <i
            id="menuIcon"
            className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}
          />
        </button>
        <div
          id="menu"
          className={`${
            isMenuOpen
              ? "flex translate-y-0"
              : "hidden lg:flex -translate-y-full lg:translate-y-0"
          } flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-6 lg:items-center lg:static absolute top-20 w-1/2 bg-white lg:bg-transparent lg:w-auto p-2 right-0 shadow-lg lg:shadow-none transition-all duration-300 transform rounded-md lg:rounded-none`}
        >
          <a
            className="text-xs md:text-base lg:text-lg font-semibold text-gray-900 px-3 py-2 lg:px-6 lg:py-2 hover:rounded-md hover:bg-primary hover:text-white transition-all duration-300"
            href="/"
          >
            Beranda
          </a>
          <a
            className="text-xs md:text-base lg:text-lg font-semibold text-gray-900 px-3 py-2 lg:px-6 lg:py-2 hover:rounded-md hover:bg-primary hover:text-white transition-all duration-300"
            href="/recommendations.html"
          >
            Rekomendasi
          </a>
          <div className="relative inline-block">
            <a
              href="#"
              id="activityButton"
              ref={buttonRef}
              onClick={toggleDropdown}
              className="flex items-baseline space-x-2 text-xs md:text-base lg:text-lg font-semibold text-gray-900 px-3 py-2 lg:px-6 lg:py-2 hover:rounded-md hover:bg-primary hover:text-white transition-all duration-300"
            >
              <span>Aktivitas</span>
              <i
                id="iconArrow"
                className={`fas ${
                  isDropdownOpen ? "fa-chevron-down" : "fa-chevron-right"
                } text-xs`}
              />
            </a>
            <div
              id="activityDropdown"
              ref={dropdownRef}
              className={`${
                isDropdownOpen ? "" : "hidden"
              } absolute z-10 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg`}
            >
              <a
                href="https://chat.whatsapp.com"
                className="block px-4 py-2 text-xs lg:text-base text-gray-700 hover:bg-gray-100"
              >
                Gabung WhatsApp
              </a>
              <a
                href="https://chat.whatsapp.com"
                className="block px-4 py-2 text-xs lg:text-base text-gray-700 hover:bg-gray-100"
              >
                Media Partner
              </a>
            </div>
          </div>
          <a
            className="text-xs md:text-base lg:text-lg font-semibold text-gray-900 px-3 py-2 lg:px-6 lg:py-2 hover:rounded-md hover:bg-primary hover:text-white transition-all duration-300"
            href="/field_program.html"
          >
            Bidang & Program Kerja
          </a>
          <a
            className="text-xs md:text-base lg:text-lg font-semibold text-gray-900 px-3 py-2 lg:px-6 lg:py-2 hover:rounded-md hover:bg-primary hover:text-white transition-all duration-300"
            href="/recommendations.html"
          >
            Kontak
          </a>
        </div>
      </div>
    </div>
  );
}
