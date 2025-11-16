"use client";
import React from "react";

export default function BlurText({
  text = "",
  delay = 120,
  className = "text-2xl mb-8",
  animateBy = "words", // "words" | "chars"
  direction = "top",   // "top" | "bottom"
}) {
  const items =
    animateBy === "chars"
      ? Array.from(text)
      : text.split(/\s+/).filter(Boolean);

  return (
    <span className={className} aria-label={text} style={{ display: "inline-block" }}>
      {items.map((item, i) => (
        <span
          key={i}
          className={`inline-block blur-0 opacity-0 will-change-transform`}
          style={{
            animation: `${direction === "top" ? "blurInUp" : "blurInDown"} 650ms ease both`,
            animationDelay: `${i * delay}ms`,
            marginRight: animateBy === "words" ? "0.25rem" : undefined,
          }}
        >
          {item}
        </span>
      ))}
    </span>
  );
}