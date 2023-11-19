import type { ReactNode } from 'react';
import * as S from './button.styles';

interface ButtonProps {
    className?: string;
    children: ReactNode;
    onClick?: () => void;
    onMouseEnter?: () => void;
}

export function Button({
    className,
    children,
    onClick,
    onMouseEnter
}: ButtonProps): JSX.Element {
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

export function OutlineButton({ children }: ButtonProps): JSX.Element {
    return (
        <S.OutlineButton>
            {children}
        </S.OutlineButton>
    );
}