import * as S from './separator.styles';

interface SeparatorProps {
    width: string;
    height: string;
    backgroundcolor: string;
    className?: string;
}

const Separator = ({ width, height, backgroundcolor, className }: SeparatorProps) => {
    return (
        <S.Separator
            width={width}
            height={height}
            backgroundcolor={backgroundcolor}
            className={className}
        />
    );
}

export default Separator;