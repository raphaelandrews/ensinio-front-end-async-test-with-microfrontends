import { ReactNode } from 'react';
import { Variants, motion } from 'framer-motion';

interface ShakeVariants extends Variants {
  hover: {
    rotate: number,
    transition: {
      duration: number,
      repeat: number;
      repeatType: 'reverse' | 'loop' | 'mirror';
    },
  },
}

const shakeVariants: ShakeVariants = {
  hover: {
    rotate: 60,
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

const ShakeAnimate = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div variants={shakeVariants} whileHover="hover">
      {children}
    </motion.div>
  );
};

export default ShakeAnimate;