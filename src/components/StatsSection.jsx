import React from "react";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { value: "1B", label: "Total Supply", icon: "💎" },
    { value: "0%", label: "Tax", icon: "🔥" },
    { value: "100%", label: "Community", icon: "👥" },
    { value: "∞", label: "Meme Power", icon: "🚀" },
  ];

  return (
    <section className="py-20 px-4 relative z-20 bg-[#072733]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          🛡️ RESISTANCE STATS
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-black/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-black/70 transition-all duration-200 hover:scale-105 border border-yellow-400/30 hover:border-yellow-400/70"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-1">{stat.value}</div>
              <div className="text-white/90 text-sm font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 