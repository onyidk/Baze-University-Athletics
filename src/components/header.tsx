"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-500 shadow-lg">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        <Link href="#" className="logo">
          <Image
            src="/assets/images/baze-sports-logo.png"
            alt="Baze Sports Logo"
            width={60}
            height={60}
            className="h-15 w-auto"
          />
        </Link>

        <nav
          className={`navbar ${
            isMobileMenuOpen ? "active" : ""
          } hidden lg:block`}
        >
          <ul className="flex items-center gap-4">
            <li>
              <Link
                href="#"
                className="text-black hover:text-blue-200 font-medium px-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="https://docs.google.com/forms/d/1jQhLQYVWiSpkaQGz7n9_Mg7rqIyyBuPN_pc3ieovhh4/edit"
                target="_blank"
                className="text-black hover:text-blue-200 font-medium px-2"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                href="#news"
                className="text-black hover:text-blue-200 font-medium px-2"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="#schedule"
                className="text-black hover:text-blue-200 font-medium px-2"
              >
                Schedule
              </Link>
            </li>
            <li>
              <Link
                href="#sports"
                className="text-black hover:text-blue-200 font-medium px-2"
              >
                Sports
              </Link>
            </li>

            <li className="dropdown relative">
              <Link
                href="#bazebasketballleague"
                className="text-black hover:text-blue-200 font-medium px-2"
              >
                Baze Basketball League
              </Link>
              <ul className="dropdown-content">
                <li>
                  <Link href="#" className="block px-3 py-2 hover:bg-gray-100">
                    Underdogs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 hover:bg-gray-100">
                    Terminators
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 hover:bg-gray-100">
                    Jaegers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 hover:bg-gray-100">
                    Wildcards
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 hover:bg-gray-100">
                    Villans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 hover:bg-gray-100">
                    Titans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 hover:bg-gray-100">
                    Predators
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="#roster"
                className="text-black hover:text-blue-200 font-medium px-2"
              >
                Roster
              </Link>
            </li>
            <li>
              <Link
                href="#stats"
                className="text-black hover:text-blue-200 font-medium px-2"
              >
                Stats
              </Link>
            </li>
            <li>
              <Link
                href="#videos"
                className="text-black hover:text-blue-200 font-medium px-2"
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                href="#footer"
                className="text-black hover:text-blue-200 font-medium px-2"
              >
                Social Media
              </Link>
            </li>
            <li>
              <Link
                href="#rsvp"
                className="text-black hover:text-blue-200 font-medium px-2"
              >
                RSVP
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-black hover:text-blue-200 font-medium px-2"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="lg:hidden text-xl cursor-pointer text-black hover:text-blue-200"
            onClick={toggleMobileMenu}
          >
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="text-xl cursor-pointer text-black hover:text-blue-200">
            <i className="fa-solid fa-search"></i>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-blue-100 border-t border-gray-200">
          <ul className="py-2">
            <li>
              <Link
                href="#"
                className="block px-4 py-2 text-black bg-gray-500 mx-3 my-2 rounded-full text-center"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="https://docs.google.com/forms/d/1jQhLQYVWiSpkaQGz7n9_Mg7rqIyyBuPN_pc3ieovhh4/edit"
                target="_blank"
                className="block px-4 py-2 text-black bg-gray-500 mx-3 my-2 rounded-full text-center"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                href="#news"
                className="block px-4 py-2 text-black bg-gray-500 mx-3 my-2 rounded-full text-center"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="#schedule"
                className="block px-4 py-2 text-black bg-gray-500 mx-3 my-2 rounded-full text-center"
              >
                Schedule
              </Link>
            </li>
            <li>
              <Link
                href="#sports"
                className="block px-4 py-2 text-black bg-gray-500 mx-3 my-2 rounded-full text-center"
              >
                Sports
              </Link>
            </li>
            <li>
              <Link
                href="#roster"
                className="block px-4 py-2 text-black bg-gray-500 mx-3 my-2 rounded-full text-center"
              >
                Roster
              </Link>
            </li>
            <li>
              <Link
                href="#stats"
                className="block px-4 py-2 text-black bg-gray-500 mx-3 my-2 rounded-full text-center"
              >
                Stats
              </Link>
            </li>
            <li>
              <Link
                href="#videos"
                className="block px-4 py-2 text-black bg-gray-500 mx-3 my-2 rounded-full text-center"
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block px-4 py-2 text-black bg-gray-500 mx-3 my-2 rounded-full text-center"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
