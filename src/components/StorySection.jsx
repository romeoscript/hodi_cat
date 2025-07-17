import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BONK from "../assets/bonk3.png";

const storyCards = [
  {
    title: "THE CRISIS",
    emoji: "💥",
    desc: (
      <>
        In the year <span className="text-yellow-400 font-bold">2025</span>, the blockchain world was on the brink of collapse.<br/>
        Crypto, once a beacon of freedom, had fallen under siege by the corporate overlords of <span className="text-red-400 font-bold">Pump.fun</span>.
      </>
    ),
  },
  {
    title: "THE ENEMY",
    emoji: "🦹‍♂️",
    desc: (
      <>
        Pump.fun mutated into a megacorp powered by centralized contracts, algorithmic greed, and an army of influencer shills.<br/>
        <span className="text-orange-300 font-semibold">They weren't pumping for fun anymore — they were pumping for control.</span>
      </>
    ),
  },
  {
    title: "THE HERO",
    emoji: <img src={BONK} alt="Bonk" className="w-12 h-12 inline-block align-middle rounded-full shadow-lg bg-black" />,
    desc: (
      <>
        Enter <span className="text-yellow-400 font-bold">Bonk</span>, a battle-scarred cyberdog bred in the memepits of ancient Dogewood.<br/>
        Half-code, half-canine, and 100% based, Bonk had witnessed the rise and fall of empires like Bitconnect, Terra, and FTX. But this time… it was personal.
      </>
    ),
  },
  {
    title: "THE MISSION",
    emoji: "⚡",
    desc: (
      <>
        <span className="text-yellow-300 font-bold">Bonk had one goal:</span><br/>
        Unleash the Source. Free the Memes. Bark for the Blockchain.
      </>
    ),
  },
];

export default function StorySection() {
  const [parallaxY, setParallaxY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setParallaxY(window.scrollY * 0.33);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.section
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="py-20 px-4 relative z-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFB347 0%, #FF8008 100%)" }}
    >
      {/* Parallax Bonk mascot (large, faded) */}
      <img
        src={BONK}
        alt="Bonk Parallax"
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 z-0"
        style={{
          width: "600px",
          maxWidth: "90vw",
          transform: `translate(-50%, -50%) translateY(${parallaxY}px) scale(1.1)`
        }}
        aria-hidden
      />
      {/* Floating sparkles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-yellow-200/40 blur-md opacity-60 animate-pulse"
          style={{
            width: `${30 + Math.random() * 40}px`,
            height: `${30 + Math.random() * 40}px`,
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
            animationDelay: `${Math.random() * 3}s`,
            zIndex: 1,
          }}
        />
      ))}
      <div className="max-w-5xl mx-auto relative z-30">
        <motion.h2
          className="text-4xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-white"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          ⚡ THE $COB CHRONICLES ⚡
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {storyCards.map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-black/80 rounded-2xl p-8 flex flex-col items-center shadow-2xl border border-yellow-400/30 hover:border-yellow-400 transition-all duration-200 hover:scale-105"
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * idx, ease: "easeOut" }}
              viewport={{ once: false }}
              style={{
                transform: `translateY(${parallaxY * 0.15}px)`,
                transition: "transform 0.3s cubic-bezier(.4,2,.6,1)",
              }}
            >
              <div className="text-5xl mb-4 drop-shadow-xl">{card.emoji}</div>
              <div className="text-2xl font-black mb-3 text-white text-center tracking-wide font-meme">
                {card.title}
              </div>
              <div className="text-lg text-white/90 text-center leading-relaxed">
                {card.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 