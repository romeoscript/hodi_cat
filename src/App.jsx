import React from "react";
import hodicatBg from "./assets/hodicat.jpg";

const X_LINK = "https://x.com/CallOfBonk";
const DEX_LINK =
  "https://dexscreener.com/solana/DyQhAmM9drDbbs1CaHpdCRFt6MxhESV8ThS71xuqbonk";

// ---
// IMPORTANT: Add the following to your tailwind.config.js under theme.extend:
//
// keyframes: {
//   'zoom-rotate': {
//     '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
//     '50%': { transform: 'scale(1.08) rotate(2deg)' },
//   },
//   'fade-in': {
//     '0%': { opacity: 0, transform: 'translateY(40px)' },
//     '100%': { opacity: 1, transform: 'translateY(0)' },
//   },
//   'wiggle': {
//     '0%, 100%': { transform: 'rotate(-3deg)' },
//     '50%': { transform: 'rotate(3deg)' },
//   },
//   'pulse-slow': {
//     '0%, 100%': { opacity: 1 },
//     '50%': { opacity: 0.7 },
//   },
// },
// animation: {
//   'zoom-rotate': 'zoom-rotate 16s ease-in-out infinite',
//   'fade-in': 'fade-in 1s ease-out',
//   'wiggle': 'wiggle 1.5s ease-in-out infinite',
//   'pulse-slow': 'pulse-slow 2s ease-in-out infinite',
// },
// ---

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background image */}
      <img
        src={hodicatBg}
        alt="Call of Bonk background"
        className="absolute inset-0 w-full h-full object-cover z-0 scale-100 animate-zoom-rotate"
      />
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10 animate-pulse-slow transition-opacity duration-1000" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-white px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center animate-wiggle">
          Call of Bonk is Coming Soon!
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-yellow-300 text-center max-w-xl animate-fade-in">
          Don't trench alone. Join the Bonk army!!!!
        </p>
        <a
          href={X_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-black hover:bg-zinc-800 transition px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-bounce animate-pulse-slow mb-4"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="currentColor"
            viewBox="0 0 1200 1227"
          >
            <path d="M1142 0H893L600 410 307 0H58l410 570L0 1227h249l351-495 351 495h249L790 657z" />
          </svg>
          Follow us on X
        </a>
        <a
          href={DEX_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 transition px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-fade-in text-black"
        >
          View on Dexscreener
        </a>
      </div>
    </div>
  );
}
