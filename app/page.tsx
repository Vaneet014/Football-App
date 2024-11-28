

import React from "react";
import "../styles/home.css"; // Make sure to add styles for your page

export default function Home() {
  return (
    <div className="home-page h-full pt-32  bg-cover bg-center" style={{ backgroundImage: "url('/image-welcome.jpg')" }}>
      {/* Background Image */}
      <div className="overlay absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="background-image bg-cover bg-center relative h-full" 
        
      >

        {/* Content */}
        <div className="content relative z-10 text-center text-white px-4 sm:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 transition-opacity duration-700 opacity-100 animate-fadeIn">
            Welcome to the Football App
          </h1>
          <p className="text-xl sm:text-2xl mb-10">Explore live scores, league details, and more!</p>

          {/* Links as Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/live-scores"
              className="text-lg sm:text-xl bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-all"
            >
              Live Scores
            </a>
            <a
              href="/rules"
              className="text-lg sm:text-xl bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-all"
            >
              Rules
            </a>
            <a
              href="/login"
              className="text-lg sm:text-xl bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-all"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
