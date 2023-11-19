import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeInAnimateProps {
  initialY?: number;
  initialX?: number;
  animateY?: number;
  animateX?: number;
  delay?: number;
  className?: string;
  children: ReactNode;
}

const FadeInAnimate = ({
  initialY,
  initialX,
  animateY,
  animateX,
  delay,
  className,
  children
}: FadeInAnimateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY, x: initialX }}
      animate={{ opacity: 1, y: animateY, x: animateX }}
      transition={{
        delay: delay,
        duration: 1
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimate;