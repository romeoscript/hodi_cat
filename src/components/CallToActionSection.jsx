import React from "react";
import { motion } from "framer-motion";

const X_LINK = "https://x.com/CallOfBonk";
const DEX_LINK = "https://dexscreener.com/solana/DyQhAmM9drDbbs1CaHpdCRFt6MxhESV8ThS71xuqbonk";
const TELEGRAM_LINK = "https://t.me/CallOfBonk";

export default function CallToActionSection() {
  const socials = [
    { name: "X Command", icon: "🐦", link: X_LINK },
    { name: "Telegram HQ", icon: "💬", link: TELEGRAM_LINK },
    { name: "Battle Data", icon: "📈", link: DEX_LINK },
  ];

  return (
    <section className="py-20 px-4 relative z-20 bg-[#072733]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          ⚔️ JOIN THE RESISTANCE
        </motion.h2>
        <motion.p
          className="text-2xl text-white mb-4 font-bold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          The blockchain needs heroes.
        </motion.p>
        <motion.p
          className="text-xl text-orange-300 mb-12 font-semibold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Don't trench alone. Join the Bonk army.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/30 backdrop-blur-sm rounded-xl px-8 py-6 hover:bg-black/50 transition-all duration-200 hover:scale-105 border border-yellow-400/50 hover:border-yellow-400"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl">{social.icon}</span>
                <span className="text-white font-bold">{social.name}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
} 