// ./_util/herotxt.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type FlipWordsProps = {
  words: string[];
  className?: string;
  interval?: number;
};

export const FlipWords: React.FC<FlipWordsProps> = ({
  words,
  className = "",
  interval = 2000,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(id);
  }, [words, interval]);

  const currentWord = words[index];

  return (
    <span className={`inline-block overflow-hidden align-baseline ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="inline-block leading-tight"
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
