import Link from 'next/link';
import { Variants, motion } from "framer-motion";

import * as S from "./features.styles";
import { featuresImage } from '@/utils/format-image';
import { FeatureItem } from '@/types/Features';

import { Container } from 'ui/components/container/container';
import { Separator } from 'ui/components/separator/separator';
import PingAnimate from '@/animations/ping-animate';
import { useNextHostTranslation } from "i18next-shared-lib/i18n/useNextHostTranslation";
import i18nService from "i18next-shared-lib/lib/i18nService";
import { RocketIcon } from 'ui/assets/icons/rocket-icon';
import { ArrowRightIcon } from 'ui/assets/icons/arrow-right-icon';

interface FeaturesProps {
    data: FeatureItem[];
}

interface AnimationVariants extends Variants {
    hover: {
        x: number;
        transition: {
            duration: number;
            repeat: number;
            repeatType: 'reverse' | 'loop' | 'mirror';
        };
    };
}

const animationVariants: AnimationVariants = {
    initial: {
        x: 0,
    },
    hover: {
        x: 10,
        transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
};

const Features = ({ data }: FeaturesProps) => {
    const { t } = useNextHostTranslation('features');

    const getCurrentLanguage = () => {
        return i18nService.getCurrentLanguage();
    }

    if (!Array.isArray(data)) {
        return null;
    }

    const currentLanguage = getCurrentLanguage();

    return (
        <S.FeaturesContainer>
            <Container>
                <S.FeaturesWrapper>
                    <S.FeatuesIntro>
                        <div className="features__subtitle">
                            <Separator
                                width="40px"
                                height="1px"
                                backgroundcolor="hsla(252, 67%, 58%, .5)"
                            />
                            <span>{t('detalhes')}</span>
                        </div>
                        <p>{t('recursos')}  ⚡️</p>
                    </S.FeatuesIntro>
                    <h2>{t('titulo')}</h2>
                    <S.FeaturesCards>
                        {data.map((item) => (
                            <PingAnimate key={item.id} hoverY={-10} duration={0.3}>
                                <S.FeaturesCard>
                                    {featuresImage(item.id)}
                                    <h3>{item.title[currentLanguage]}</h3>
                                    <p>{item.description[currentLanguage]}</p>
                                </S.FeaturesCard>
                            </PingAnimate>
                        ))}
                    </S.FeaturesCards>
                    <Separator width='100%' height='1px' backgroundcolor='hsl(240, 4%, 91%)' />
                    <S.FeaturesFooter>
                        <div className='features__footer___content'>
                            <RocketIcon />
                            <p>{t('maisRecursos')}</p>
                        </div>
                        <motion.div whileHover="hover">
                            <Link href='https://ndrws.dev' target='_blank'>
                                {t('mais')}
                                <motion.div variants={animationVariants} className='features__footer___image'>
                                    <ArrowRightIcon />
                                </motion.div>
                            </Link>
                        </motion.div>
                    </S.FeaturesFooter>
                </S.FeaturesWrapper>
            </Container>
        </S.FeaturesContainer>
    );
}

export default Features;