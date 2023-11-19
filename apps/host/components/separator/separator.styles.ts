import styled from 'styled-components';

interface SeparatorProps {
    width: string;
    height: string;
    backgroundcolor: string;
}

export const Separator = styled.div<SeparatorProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundcolor};
`