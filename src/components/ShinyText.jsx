"use client";

export default function ShinyText({
  text = "",
  disabled = false,
  speed = 3,
  className = "",
}) {
  // Shimmer gradient that passes a light band across the text
  const gradient =
    "linear-gradient(90deg, var(--text) 0%, var(--text) 40%, #ffffff 50%, var(--text) 60%, var(--text) 100%)";

  const style = disabled
    ? { color: "var(--text)" }
    : {
        backgroundImage: gradient,
        backgroundSize: "200% 100%",
        backgroundPosition: "0% 0%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        animation: "shimmer linear infinite",
        animationDuration: `${speed}s`,
      };

  return (
    <span className={className} style={style} aria-label={text}>
      {text}
    </span>
  );
}
