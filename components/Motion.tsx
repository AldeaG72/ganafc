"use client";

import { MotionConfig, motion, type Variants } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

// Respectă setarea „reduce motion” a sistemului de operare.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type Direction = "up" | "down" | "left" | "right" | "none";

function offset(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
}

// Element care apare lin când intră în ecran.
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 40,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  distance?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(6px)", ...offset(direction, distance) }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const container: Variants = {
  hidden: {},
  show: (stagger: number = 0.12) => ({ transition: { staggerChildren: stagger } }),
};

const item: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.96, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.7, ease: EASE } },
};

// Copiii de tip StaggerItem apar unul după altul.
export function Stagger({
  children,
  className,
  stagger = 0.12,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={container}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
