"use client";

import { animate, motion } from "framer-motion";

import {
  useEffect,
  useRef,
} from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
};

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const countRef =
    useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.2,

      onUpdate(latest) {
        if (countRef.current) {
          countRef.current.textContent =
            `${prefix}${latest.toFixed(1)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [value, prefix, suffix]);

  return (
    <motion.span
      ref={countRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  );
}