"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function TextType({
  text = ["Typing effect"],
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
  className = "text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand2 to-brand",
}) {
  const phrases = useMemo(() => (Array.isArray(text) ? text : [String(text)]), [text]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length] ?? "";

    const tick = () => {
      if (!isDeleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next.length === current.length) {
          // Pause at full word before deleting
          timerRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
        timerRef.current = setTimeout(tick, typingSpeed);
      } else {
        const next = current.slice(0, Math.max(0, displayed.length - 1));
        setDisplayed(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
          timerRef.current = setTimeout(tick, typingSpeed);
          return;
        }
        timerRef.current = setTimeout(tick, Math.max(typingSpeed / 2, 20));
      }
    };

    timerRef.current = setTimeout(tick, typingSpeed);
    return () => timerRef.current && clearTimeout(timerRef.current);
  }, [phrases, phraseIndex, isDeleting, displayed.length, typingSpeed, pauseDuration]);

  return (
    <span className={className} suppressHydrationWarning>
      {displayed}
      {showCursor && <span>{cursorCharacter}</span>}
    </span>
  );
}
