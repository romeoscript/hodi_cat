import React from "react";

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Subtle meme floating elements */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-10 animate-pulse"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        >
          
        </div>
      ))}
    </div>
  );
} 