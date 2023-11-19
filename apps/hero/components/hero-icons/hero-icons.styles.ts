import styled from 'styled-components';

export const HomeIconsContainer = styled.div`
    position: absolute;
    top: 2.75rem;
    width: 100dvw;
    max-width: 100%;
`

export const HomeIconsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;

    div:first-child svg {
        width: 82.496px;
        height: 82.496px;
    }

    div:nth-child(2) svg {
        margin-top: 1.75rem;
        width: 67.355px;
        height: 67.355px;
    }

    div:last-child svg {
        width: 83.625px;
        height: 83.625px;
    }
`