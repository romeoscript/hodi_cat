import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dex from "../assets/dexscreener.avif";
import tel from "../assets/telegram.png";
import x from "../assets/x.png";
import BG_VIDEO from "../assets/shibainu.mp4";

const contractAddress = "DyQhAmM9drDbbs1CaHpdCRFt6MxhESV8ThS71xuqbonk";
const X_LINK = "https://x.com/CallOfBonk";
const DEX_LINK = "https://dexscreener.com/solana/DyQhAmM9drDbbs1CaHpdCRFt6MxhESV8ThS71xuqbonk";
const TELEGRAM_LINK = "https://t.me/CallOfBonk";

function VideoBackgroundParallax() {
  const [parallaxY, setParallaxY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setParallaxY(window.scrollY * 0.3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className="absolute inset-0 w-full h-full z-0"
      style={{
        transform: `translateY(${parallaxY}px)`,
        transition: "transform 0.2s cubic-bezier(.4,2,.6,1)",
        willChange: "transform"
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{
          filter: 'brightness(0.8) contrast(1.1)',
        }}
      >
        <source src={BG_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <VideoBackgroundParallax />
      <div className="relative z-30 text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-3xl">
            🐶
          </div>
          <motion.h1
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            CALL OF BONK
          </motion.h1>
        </div>
        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-16 font-semibold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Don't trench alone. Join the Bonk army.
        </motion.p>
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <a
            href={DEX_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-black px-12 py-4 rounded-xl text-xl transition-all duration-200 hover:scale-105 shadow-2xl inline-block"
          >
            BUY $COB
          </a>
        </motion.div>
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xl"
          >
            <div className="w-14 h-14 bg-white/10 backdrop-blur-lg rounded-md border border-white/20 flex items-center justify-center">
              <img src={tel} alt="telegram" className="w-10 h-10" />
            </div>
          </a>
          <a
            href={X_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xl"
          >
            <div className="w-14 h-14 bg-white/10 backdrop-blur-lg rounded-md border border-white/20 flex items-center justify-center">
              <img src={x} alt="x" className="w-10 h-10" />
            </div>
          </a>
          <a
            href={`https://solscan.io/token/${contractAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xl"
          >
            <div className="w-14 h-14 bg-white/10 backdrop-blur-lg rounded-md border border-white/20 flex items-center justify-center">
              <img src={dex} alt="dex" className="w-10 h-10" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
} 