import Image from "next/image";

import * as S from "./hero.styles";

import { useNextHostTranslation } from "i18next-shared-lib/i18n/useNextHostTranslation";

import { DevicesIcon } from "ui/assets/icons/devices-icon";
import { PlayIcon } from "ui/assets/icons/play-icon";
import FadeInAnimate from '@/animations/fadein-animate';
import ZoomAnimate from '@/animations/zoom-animate';
import { Button } from '@/components/button/button';
import HeroIcons from "@/components/hero-icons/hero-icons";
import Container from '@/components/container/container';

const heroUrl = process.env.HERO_URL || `http://localhost:3001`;

const Hero = () => {
    const { t } = useNextHostTranslation('hero');

    return (
        <S.HeroContainer>
            <HeroIcons />
            <Container>
                <S.HeroWrapper>
                    <FadeInAnimate initialX={-50} animateX={0} className="hero__content">
                        <span>
                            <DevicesIcon />
                            <span>{t('intro')}</span>
                        </span>
                        <h1>{t('titulo')}</h1>
                        <p>{t('subtitulo')}</p>
                        <div className="hero__buttons">
                            <ZoomAnimate>
                                <Button className="hero__buttons___cta">
                                    {t('comecar')}
                                </Button>
                            </ZoomAnimate>
                            <ZoomAnimate>
                                <Button className="hero__buttons___play">
                                    <PlayIcon />
                                    {t('video')}
                                </Button>
                            </ZoomAnimate>
                        </div>
                    </FadeInAnimate>
                    <div className="hero__image">
                        <Image src={`${heroUrl}/assets/man.png`} fill alt="Hero image" />
                    </div>
                </S.HeroWrapper>
            </Container>
        </S.HeroContainer>
    );
}

export default Hero;