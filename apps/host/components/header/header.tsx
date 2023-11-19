import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

import * as S from './header.styles';

import { useNextHostTranslation } from "i18next-shared-lib/i18n/useNextHostTranslation";
import i18nService from "i18next-shared-lib/lib/i18nService";
import useSolutionsStore from '@/hooks/use-solutions-menu';
import useLanguageStore from '@/hooks/use-language-menu';
import FormatLocaleFlag from '@/utils/format-locale-flag';

import { LogoEnsinio } from "ui/assets/icons/logo-ensinio";
import { ChevronsDownIcon } from "ui/assets/icons/chevrons-down-icon";
import { PersonIcon } from "ui/assets/icons/person-icon";

import PingAnimate from '@/animations/ping-animate';
import ZoomAnimate from '@/animations/zoom-animate';
import FadeInAnimate from '@/animations/fadein-animate';

import { Separator } from 'ui/components/separator/separator';
import { Container } from 'ui/components/container/container';
import { Button, OutlineButton } from 'ui/components/button/button';
import LanguageMenu from './components/language-menu/language-menu';
import SolutionsMenu from './components/solutions-menu/solutions-menu';

const Header = () => {
    const { solutionsOpen, setSolutionsOpen } = useSolutionsStore();
    const { languageOpen, setLanguageOpen } = useLanguageStore();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const controls = useAnimation();
    const { t } = useNextHostTranslation('navbar');

    const rotateSolutions = solutionsOpen ? 180 : 0;
    const rotateLanguage = languageOpen ? 180 : 0;

    const toggleMenu = () => {
        controls.start({ opacity: 0, x: 100 });
        setMenuOpen(!menuOpen);
    };

    const getCurrentLanguage = () => {
        return i18nService.getCurrentLanguage();
    }

    const currentLanguage = getCurrentLanguage();

    const headerRef = useRef<HTMLHeadElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const scrollPosition = window.scrollY;
                const headerHeight = 30 * 16;

                if (scrollPosition > headerHeight) {
                    headerRef.current.style.backgroundColor = 'hsl(224, 64%, 58%)';
                } else {
                    headerRef.current.style.backgroundColor = 'transparent';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <S.HeaderContainer ref={headerRef}>
            <Container>
                <S.HeaderWrapper>
                    <FadeInAnimate initialX={-50} animateX={0} delay={1}>
                        <Link href="/">
                            <LogoEnsinio />
                        </Link>
                    </FadeInAnimate>
                    <S.MenuContainer menuopen={menuOpen}>
                        <FadeInAnimate initialX={50} animateX={0} delay={1}>
                            <AnimatePresence>
                                {solutionsOpen && (
                                    <SolutionsMenu />
                                )}
                            </AnimatePresence>
                            <nav>
                                <S.NavList>
                                    <S.NavItem
                                        onMouseEnter={() => setSolutionsOpen(true)}
                                        onClick={() => setSolutionsOpen(!solutionsOpen)}
                                    >
                                        <div className="solutions__menu">
                                            {t('solucoes')}

                                            <motion.div
                                                animate={{ rotate: rotateSolutions }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <ChevronsDownIcon />
                                            </motion.div>
                                        </div>
                                    </S.NavItem>
                                    <S.NavItem>
                                        <PingAnimate hoverY={4} duration={0.3}>
                                            <Link href='https://ndrws.dev' target='_blank'>
                                                {t('preco')}
                                            </Link>
                                        </PingAnimate>
                                    </S.NavItem>
                                    <S.NavItem>
                                        <PingAnimate hoverY={4} duration={0.3}>
                                            <Link href='https://ndrws.dev' target='_blank'>
                                                {t('academy')}
                                            </Link>
                                        </PingAnimate>
                                    </S.NavItem>
                                    <S.NavItem>
                                        <PingAnimate hoverY={4} duration={0.3}>
                                            <Link href='https://ndrws.dev' target='_blank'>
                                                {t('blog')}
                                            </Link>
                                        </PingAnimate>
                                    </S.NavItem>
                                    <S.NavItem>
                                        <PingAnimate hoverY={4} duration={0.3}>
                                            <Link href='https://ndrws.dev' target='_blank'>
                                                {t('contato')}
                                            </Link>
                                        </PingAnimate>
                                    </S.NavItem>
                                </S.NavList>
                            </nav>
                        </FadeInAnimate>


                        <Separator
                            width="2px"
                            height="1.5rem"
                            backgroundcolor="hsla(181, 82%, 78%, .25)"
                            className='header__separator'
                        />

                        <FadeInAnimate initialX={-50} animateX={0} delay={2}>
                            <S.HeaderButtons>
                                <ZoomAnimate>
                                    <Button>
                                        <PersonIcon />
                                        {t('entrar')}
                                    </Button>
                                </ZoomAnimate>
                                <ZoomAnimate>
                                    <OutlineButton>
                                        {t('comecar')}
                                    </OutlineButton>
                                </ZoomAnimate>
                                <Button
                                    onMouseEnter={() => setLanguageOpen(true)}
                                    onClick={() => setLanguageOpen(!languageOpen)}>
                                    {FormatLocaleFlag(currentLanguage)}
                                    {currentLanguage.toUpperCase()}
                                    <motion.div
                                        animate={{ rotate: rotateLanguage }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <ChevronsDownIcon />
                                    </motion.div>
                                    <AnimatePresence>
                                        {languageOpen && (
                                            <LanguageMenu />
                                        )}
                                    </AnimatePresence>
                                </Button>
                            </S.HeaderButtons>
                        </FadeInAnimate>
                    </S.MenuContainer>

                    <FadeInAnimate initialX={50} animateX={0} delay={1}>
                        <S.HamburgerMenu onClick={toggleMenu}>
                            <div />
                            <div />
                            <div />
                        </S.HamburgerMenu>
                    </FadeInAnimate>
                </S.HeaderWrapper>
            </Container>
        </S.HeaderContainer >
    );
};

export default Header;