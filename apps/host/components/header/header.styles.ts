import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 100dvw;
    background-color: var(--header-background);
    backdrop-filter: blur(15px);
    z-index: var(--z-tn);
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--background);
    padding: 1.5rem 0;
`

interface MenuContainerProps {
    menuopen: boolean;
}

export const MenuContainer = styled.div<MenuContainerProps>`
    position: absolute;
    top: 100%;
    right: 0;
    display: ${(props) => (props.menuopen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    padding: 1.5rem;
    border-radius: .375rem;
    background-color: hsl(224, 64%, 58%);
    box-shadow: var(--shadow-base);

    .header__separator {
        display: none;
    }

     @media screen and (min-width: 1200px) {
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 0;
        background-color: transparent;
        box-shadow: none;

        .header__separator {
            display: block;
        }
    }
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    
    @media screen and (min-width: 1200px) {
        position: relative;
        flex-direction: row;
    }
`;

export const NavItem = styled.li`
    .solutions__menu:hover {
        cursor: pointer;
    }
    
    a,
    .solutions__menu  {
        position: relative;
        display: flex;
        align-items: center;
        gap: .75rem;
        font-family: var(--font-primary);
        font-size: var(--font-sm);
        font-weight: 500;
        color: var(--background);
        line-height: 105%;
    }
`;

export const HeaderButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    font-family: var(--font-primary);

    @media screen and (min-width: 1200px) {
        flex-direction: row;
        gap: 2.5rem;
    }
`

export const HamburgerMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    cursor: pointer;

    @media screen and (min-width: 1200px) {
        display: none;
    }

    div {
        width: 1.5rem;
        height: 3px;
        background-color: var(--background);
    }
`;