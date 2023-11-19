import { motion } from 'framer-motion';

import * as S from './solutions-menu.styles';

import { useNextHostTranslation } from "i18next-shared-lib/i18n/useNextHostTranslation";
import useSolutionsStore from '@/hooks/use-solutions-menu';
import ClickOutsideHandler from '@/hooks/use-click-outside';

import { EadIcon } from "ui/assets/icons/ead-icon";
import { CommunityIcon } from "ui/assets/icons/community-icon";
import { GamificationIcon } from "ui/assets/icons/gamification-icon";
import { AppIcon } from "ui/assets/icons/app-icon";
import PingAnimate from '@/animations/ping-animate';

const SolutionsMenu = () => {
    const { setSolutionsOpen } = useSolutionsStore();
    const { t } = useNextHostTranslation('navbar');

    const handleOutsideClick = () => {
        setSolutionsOpen(false);
    };

    return (
        <ClickOutsideHandler
            onOutsideClick={handleOutsideClick}
            className='solutions__animate'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.2 }}
                transition={{
                    duration: 0.8,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <S.SolutionsMenuContainer onMouseLeave={() => setSolutionsOpen(false)}>
                    <h2>{t('titulo')}</h2>
                    <S.SolutionsMenuList>
                        <PingAnimate hoverY={4} duration={0.3}>
                            <S.SolutionsMenuItem>
                                <EadIcon />
                                <div>
                                    <h3>{t('escola')}</h3>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </S.SolutionsMenuItem>
                        </PingAnimate>
                        <PingAnimate hoverY={4} duration={0.3}>
                            <S.SolutionsMenuItem>
                                <CommunityIcon />
                                <div>
                                    <h3>{t('comunidade')}</h3>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </S.SolutionsMenuItem>
                        </PingAnimate>
                        <PingAnimate hoverY={4} duration={0.3}>
                            <S.SolutionsMenuItem>
                                <GamificationIcon />
                                <div>
                                    <h3>{t('gamificacao')}</h3>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </S.SolutionsMenuItem>
                        </PingAnimate>
                        <PingAnimate hoverY={4} duration={0.3}>
                            <S.SolutionsMenuItem>
                                <AppIcon />
                                <div>
                                    <h3>{t('aplicativo')}</h3>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </S.SolutionsMenuItem>
                        </PingAnimate>
                    </S.SolutionsMenuList>
                </S.SolutionsMenuContainer>
            </motion.div>
        </ClickOutsideHandler>
    );
}

export default SolutionsMenu;