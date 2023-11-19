import { ReactNode } from 'react';
import { Variants, motion } from 'framer-motion';

interface JumpVariants extends Variants {
  hover: {
    y?: number;
    x?: number;
    transition: {
      duration: number;
      repeat: number;
      repeatType: 'reverse' | 'loop' | 'mirror';
    };
  };
}

interface JumpAnimateProps {
  hoverY?: number;
  hoverX?: number;
  duration: number;
  className?: string;
  children: ReactNode;
}

const JumpAnimate = ({ 
  hoverY, 
  hoverX, 
  duration,
  className,
  children 
}: JumpAnimateProps) => {
  const jumpVariants: JumpVariants = {
    initial: {
      y: 0,
      x: 0,
    },
    hover: {
      y: hoverY,
      x: hoverX,
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <motion.div variants={jumpVariants} whileHover="hover" className={className}>
      {children}
    </motion.div>
  );
};

export default JumpAnimate;