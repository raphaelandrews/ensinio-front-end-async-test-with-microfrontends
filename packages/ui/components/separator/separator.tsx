import * as S from './separator.styles';

interface SeparatorProps {
    width: string;
    height: string;
    backgroundcolor: string;
    className?: string;
}

export function Separator({ width, height, backgroundcolor, className }: SeparatorProps): JSX.Element {
    return (
        <S.Separator
            backgroundcolor={backgroundcolor}
            className={className}
            height={height}
            width={width}
        />
    );
}