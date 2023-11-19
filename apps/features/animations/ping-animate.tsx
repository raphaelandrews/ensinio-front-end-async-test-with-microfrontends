import { ReactNode } from 'react';
import { Variants, motion } from 'framer-motion';

interface AnimationVariants extends Variants {
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

interface PingAnimateProps {
    hoverY?: number;
    hoverX?: number;
    duration: number;
    children: ReactNode;
}

const PingAnimate = ({
    hoverY,
    hoverX,
    duration,
    children
}: PingAnimateProps) => {
    const animationVariants: AnimationVariants = {
        initial: {
            y: 0,
        },
        hover: {
            y: hoverY,
            x: hoverX,
            transition: {
                duration: duration,
                repeat: 1,
                repeatType: 'reverse',
            },
        },
    };

    return (
        <motion.div
            whileHover="hover"
            variants={animationVariants}
        >
            {children}
        </motion.div>
    );
};

export default PingAnimate;