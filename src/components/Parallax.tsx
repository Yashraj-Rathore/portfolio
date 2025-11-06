import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

export default function Parallax({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -80]);   // subtle upward drift

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
}
