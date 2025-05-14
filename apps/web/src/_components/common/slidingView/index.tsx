import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

type SlidingViewProps = {
  menuKey: string | number;
  direction?: number; // 1 (오른쪽 → 왼쪽), -1 (왼쪽 → 오른쪽)
  children: ReactNode;
};

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute" as const,
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative" as const,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    position: "absolute" as const,
  }),
};

export const SlidingView: React.FC<SlidingViewProps> = ({
  menuKey,
  direction = 1,
  children,
}) => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={menuKey}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
