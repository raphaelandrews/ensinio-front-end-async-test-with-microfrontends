import styled from 'styled-components';

export const SolutionsMenuContainer = styled.div`
    position: absolute;
    top: 2rem;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    text-align: left;
    white-space: nowrap;
    padding: 1.5rem 2.5rem;
    border-radius: 6px;
    background-color: var(--background);
    box-shadow: var(--shadow-base);
    transition: display 0.3s ease-in-out;
    cursor: default;
    z-index: var(--z-base);

    @media screen and (min-width: 600px) {
        padding: 2.75rem 3rem;
    }

    @media screen and (min-width: 1200px) {
        right: inherit;
        left: 0;
    }

    h2 {
        font-family: var(--font-secondary);
        font-size: var(--font-xs);
        font-weight: 600;
        color: var(--tertiary);
        letter-spacing: 0.15em;
        line-height: 105%;
        text-transform: uppercase;
    }
`;

export const SolutionsMenuList = styled.ul`
    display: grid;
    gap: 2.5rem;

    @media screen and (min-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const SolutionsMenuItem = styled.li`
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 1rem;
    cursor: pointer;

    h3 {
        font-family: var(--font-secondary);
        font-size: var(--font-sm);
        font-weight: 600;
        color: var(--primary);
        margin-bottom: .125rem;
        line-height: 125%;
        letter-spacing: 0.075px;
    }

    p {
        font-family: var(--font-primary);
        font-size: var(--font-tn);
        font-weight: 400;
        color: var(--muted);
        line-height: 150%;
    }

    @media screen and (min-width: 400px) {
        grid-template-columns: auto 1fr;
        grid-template-rows: 1fr;
    }
`