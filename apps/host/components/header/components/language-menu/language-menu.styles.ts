import styled from 'styled-components';

export const LanguageMenuContainer = styled.div`
    position: absolute;
    top: 1.5rem;
    right: -50%;
    text-align: left;
    box-shadow: var(--shadow-base);
    transition: display 0.3s ease-in-out;
    z-index: var(--z-tn);

    @media (min-width: 1200px) {
        right: inherit;
    }
`

export const LanguageMenuList = styled.ul`
    display: flex;
    flex-direction: column;
    border-radius: .5rem;
    background-color: var(--background);

    .active,
    :hover {
        background: linear-gradient(90deg, hsl(252, 67%, 55%) -880.48%, hsla(252, 67%, 55%, 0) 100%);
    }
`

export const LanguageMenuItem = styled.li`
    display: flex;
    align-items: center;
    gap: .625rem;
    font-size: var(--font-sm);
    font-weight: 500;
    color: hsl(258, 9%, 37%);
    text-transform: uppercase;
    line-height: 105%;
    padding: 1rem 1.5rem;

    :hover {
        background: transparent;
    }
`