import styled from 'styled-components';

export const Button = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    gap: .75rem;
    font-size: var(--font-sm);
    font-weight: 600;
    color: var(--background);
    line-height: 105%;
`

export const OutlineButton = styled(Button)`
    padding: .75rem 1.5rem;
    border: 1px solid hsla(0, 0%, 100%, .5);
    border-radius: 5rem;
`