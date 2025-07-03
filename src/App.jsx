import React from "react";
import hodicatBg from "./assets/hodicat-bg.jpg";


const X_LINK = "https://x.com/your-hodicat-handle"; // Replace with your actual X link

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
      <img
        src={hodicatBg} // Place your image in the public folder with this name
        alt="Hodicat background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-50 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-white px-4 py-12">
       
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center">
          Hodicat is Coming Soon!
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-yellow-300 text-center max-w-xl">
          The gangsta cat is almost here. Stay tuned!
        </p>
        <a
          href={X_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-black hover:bg-zinc-800 transition px-6 py-3 rounded-full font-bold text-lg shadow-lg"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="currentColor"
            viewBox="0 0 1200 1227"
          >
            <path d="M1142 0H893L600 410 307 0H58l410 570L0 1227h249l351-495 351 495h249L790 657z"/>
          </svg>
          Follow us on X
        </a>
      </div>
    </div>
  );
} 