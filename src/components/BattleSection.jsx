import React from "react";
import BONK from "../assets/bonk3.png";
import HODIBG from "../assets/hodicat.jpg";

export default function BattleSection() {
  return (
    <section className="py-20 px-4 relative z-20 overflow-hidden ">
      {/* Parallax/faded background image */}
      <img
        src={HODIBG}
        alt="Battle Background"
        className="absolute inset-0 w-full h-full object-cover z-0  blur-md"
        style={{ pointerEvents: 'none' }}
        aria-hidden
      />
      <div className="max-w-5xl mx-auto relative z-10">
        <h2
          className="text-4xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          🔥 THE FINAL BATTLE
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Commander Bonk */}
          <div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div className="relative flex items-center justify-center">
              <div className="w-72 sm:w-80 aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 p-1">
                <img 
                  src={BONK} 
                  alt="Commander Bonk" 
                  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 mx-auto border-4 border-black/60"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-400 to-orange-400 text-black px-4 py-2 rounded-full font-black shadow-xl animate-pulse z-20">
                COMMANDER ⚔️
              </div>
            </div>
          </div>
          <div
            className="lg:w-2/3 space-y-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-red-400/50">
              <p className="text-lg text-white leading-relaxed mb-4">
                Armed with his trusty <span className="text-yellow-400 font-bold">Ledger-shaped chew toy</span> and a <span className="text-orange-400 font-bold">gas-fee-resistant jetpack</span>, he howled into battle across Solana servers. He dodged influencer pump tweets, bit through liquidity traps, and deployed righteous rugpulls against his enemies.
              </p>
              <p className="text-lg text-white leading-relaxed mb-4">
                But the final battle was yet to come…
              </p>
              <p className="text-lg text-white leading-relaxed">
                Deep inside the mainframe of <span className="text-red-400 font-bold">Pump.fun HQ</span>, guarded by TikTok NPCs and GigaWhales on payroll, lay the <span className="text-yellow-400 font-bold">Centralized Core</span>. And only one dog had the balls (still intact, unlike Vitalik's) to finish the mission.
              </p>
            </div>
            <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 p-6 rounded-lg border-l-4 border-yellow-400">
              <p className="text-yellow-300 font-bold text-xl mb-2">
                As he charged into the data abyss, Bonk barked one last message on-chain:
              </p>
              <p className="text-white text-2xl font-black">
                "Not your keys?<br/>
                Not your treats."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 