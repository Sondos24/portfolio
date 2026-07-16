export const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  viewport: { once: true, amount: 0.15 },
} as const;

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.08 },
  },
  viewport: { once: true, amount: 0.1 },
} as const;

export const staggerItem = {
  initial: { opacity: 0, y: 16 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

export const sectionBase =
  "relative mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:px-10 lg:px-16";
