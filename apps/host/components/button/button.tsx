import { ReactNode } from 'react';

import * as S from './button.styles';

interface ButtonProps {
    className?: string;
    children: ReactNode;
    onClick?: () => void;
    onMouseEnter?: () => void;
}

export const Button = ({
    className,
    children,
    onClick,
    onMouseEnter
}: ButtonProps) => {
    return (
        <S.Button
            className={className}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
        >
            {children}
        </S.Button>
    );
}

export const OutlineButton = ({ children }: ButtonProps) => {
    return (
        <S.OutlineButton>
            {children}
        </S.OutlineButton>
    );
}