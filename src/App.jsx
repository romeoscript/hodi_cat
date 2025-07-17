import React from "react";
import HeroSection from "./components/HeroSection";
import StorySection from "./components/StorySection";
import BattleSection from "./components/BattleSection";
import StatsSection from "./components/StatsSection";
import RoadmapSection from "./components/RoadmapSection";
import CallToActionSection from "./components/CallToActionSection";
import FloatingElements from "./components/FloatingElements";
import BONK from "./assets/bonk-logo.png";

const DEX_LINK = "https://dexscreener.com/solana/DyQhAmM9drDbbs1CaHpdCRFt6MxhESV8ThS71xuqbonk";

export default function CallOfBonkLanding() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <FloatingElements />
      {/* Simple navigation - minimal like BONKzai */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl"><img src={BONK} alt="BONK" className="w-10 h-10" /></span>
            <span className="font-bold text-white">CALL OF BONK</span>
          </div>
          <a
            href={DEX_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-lg font-bold text-sm hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            BUY $COB
          </a>
        </div>
      </nav>
      <HeroSection />
      <StorySection />
      <BattleSection />
      <StatsSection />
      {/* <RoadmapSection /> */}
      <CallToActionSection />
      {/* Footer */}
      <footer className="py-8 px-4 bg-black/90 backdrop-blur-sm relative z-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/90 mb-2 font-semibold">
            © {new Date().getFullYear()} Call of Bonk. The resistance lives on.
          </p>
          <p className="text-white/70 text-sm">
            Not your keys? Not your treats. 🚀
          </p>
        </div>
      </footer>
    </div>
  );
}