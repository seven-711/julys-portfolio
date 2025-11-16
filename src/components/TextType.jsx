"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function TextType({
  text = ["Typing effect"],
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
  className = "bg-gradient-to-r from-[#40ffaa] to-[#4079ff] bg-clip-text text-transparent",
}) {
  const phrases = useMemo(() => {
    // Handle both string and object formats
    const items = Array.isArray(text) ? text : [String(text)];
    return items.map(item => ({
      text: typeof item === 'object' ? item.text : String(item),
      className: typeof item === 'object' ? item.className : ''
    }));
  }, [text]);

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [currentClass, setCurrentClass] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length] || { text: "" };
    const currentText = currentPhrase.text;
    
    if (!isDeleting && displayed.length === 0) {
      setCurrentClass(currentPhrase.className || '');
    }

    const tick = () => {
      if (!isDeleting) {
        const next = currentText.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next.length === currentText.length) {
          // Pause at full word before deleting
          timerRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
        timerRef.current = setTimeout(tick, typingSpeed);
      } else {
        const next = currentText.slice(0, Math.max(0, displayed.length - 1));
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

  // Combine base className with dynamic className from current phrase
  const combinedClassName = `${className} ${currentClass}`.trim();

  return (
    <span className={combinedClassName} suppressHydrationWarning>
      {displayed}
      {showCursor && <span>{cursorCharacter}</span>}
    </span>
  );
}
