"use client";

import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-[3] bg-gray-900 text-white py-4 shadow-md ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold hover:text-gray-300">
          Football App
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/live-scores" className="hover:text-gray-300">
            Live Scores
          </a>
          <a href="/rules" className="hover:text-gray-300">
            Rules
          </a>
          <a href="/login" className="hover:text-gray-300">
            Login
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => toggleMenu()}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className="md:hidden flex flex-col space-y-4 mt-4 hidden"
      >
        <a href="/" className="block text-center hover:text-gray-300">
          Home
        </a>
        <a href="/live-scores" className="block text-center hover:text-gray-300">
          Live Scores
        </a>
        <a href="/rules" className="block text-center hover:text-gray-300">
          Rules
        </a>
        <a href="/login" className="block text-center hover:text-gray-300">
          Login
        </a>
      </div>
    </header>
  );
}

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}
