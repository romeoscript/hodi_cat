import React from "react";

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Cyberpunk floating elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        >
          <div className="text-3xl">
            {["🚀", "💎", "🔥", "⚡", "🌙", "🎮", "💻", "🛡️"][i]}
          </div>
        </div>
      ))}
    </div>
  );
} 