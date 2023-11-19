import styled from 'styled-components';

export const FeaturesContainer = styled.section`

`

export const FeaturesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 6rem 0;

    h2 {
        font-family: var(--font-secondary);
        font-size: var(--font-xl);
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.16px;
        margin-top: 1.5rem;
    }
`

export const FeatuesIntro = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;

    span {
        font-family: var(--font-secondary);
        font-size: var(--font-base);
        font-weight: 600;
        color: var(--secondary);
        line-height: 105%;
        letter-spacing: 2.4px;
        text-transform: uppercase;
    }

    p {
        font-family: var(--font-primary);
        font-weight: 400;
        color: var(--muted);
        line-height: 150%;
        align-self: end;
    }

    .features__subtitle {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    @media screen and (min-width: 800px) {
        flex-direction: row;
        gap: 0;

        p {
            align-self: inherit;
        }
    }
`

export const FeaturesCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    margin: 2.5rem 0;

    @media screen and (min-width: 1000px) {
        flex-direction: row;
        justify-content: space-between;
        gap: 0;
        margin: 4rem 0;
    }
`

export const FeaturesCard = styled.article`
    max-width: 280px;
    cursor: pointer;

    h3 {
        font-family: var(--font-secondary);
        font-size: var(--font-lg);
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.1px;
        margin-top: 1.5rem;
    }

    p {
        font-family: var(--font-primary);
        font-weight: 400;
        color: var(--muted);
        line-height: 150%;
        margin-top: .75rem;
    }
`

export const FeaturesFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.25rem 0;
    font-family: var(--font-primary);

    a {
        display: flex;
        align-items: center;
        gap: 2rem;
        font-weight: 600;
        color: var(--tertiary);
        line-height: 125%;
    }
    
    .features__footer___content {
        display: flex;
        align-items: center;
        gap: 2rem;
        font-weight: 500;
        color: var(--muted);
        line-height: 150%;
    }

    .features__footer___image {
        display: flex;
    }

    @media screen and (min-width: 800px) {
        flex-direction: row;
        justify-content: space-between;
        gap: 0;
    }
`