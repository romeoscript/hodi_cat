import React from "react";
import { motion } from "framer-motion";

export default function RoadmapSection() {
  const roadmapItems = [
    { phase: "PHASE 1", title: "The Awakening", status: "completed", desc: "Bonk awakens from the memepits" },
    { phase: "PHASE 2", title: "Army Assembly", status: "current", desc: "Recruiting cyber-soldiers" },
    { phase: "PHASE 3", title: "Server Infiltration", status: "upcoming", desc: "Penetrate exchange networks" },
    { phase: "PHASE 4", title: "Meme Warfare", status: "upcoming", desc: "Deploy viral countermeasures" },
    { phase: "PHASE 5", title: "Core Destruction", status: "upcoming", desc: "Destroy the Centralized Core" },
  ];

  return (
    <section className="py-20 px-4 relative z-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          📡 MISSION ROADMAP
        </motion.h2>
        <div className="space-y-4">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              className={`bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/50 transition-all duration-200 border-l-4 ${
                item.status === 'completed' ? 'border-green-400' :
                item.status === 'current' ? 'border-yellow-400' :
                'border-gray-400'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-yellow-400 font-bold">{item.phase}</span>
                    {item.status === 'completed' && (
                      <span className="bg-green-500 text-black px-2 py-1 rounded text-xs font-bold">
                        COMPLETED
                      </span>
                    )}
                    {item.status === 'current' && (
                      <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 