import { motion } from 'framer-motion';

import * as S from './language-menu.styles';

import i18nService from "i18next-shared-lib/lib/i18nService";
import useLanguageStore from "@/hooks/use-language-menu";
import ClickOutsideHandler from "@/hooks/use-click-outside";
import FormatLocaleFlag from "@/utils/format-locale-flag";

import { CheckIcon } from "ui/assets/icons/check-icon";

const LanguageMenu = () => {
    const { setLanguageOpen } = useLanguageStore();

    const switchLanguage = (language: string) => {
        return i18nService.switchLanguage(language);
    }

    const getCurrentLanguage = () => {
        return i18nService.getCurrentLanguage();
    }

    const currentlanguage = getCurrentLanguage();

    const language = i18nService.getLanguages();

    const handleOutsideClick = () => {
        setLanguageOpen(false);
    };

    return (
        <ClickOutsideHandler
            onOutsideClick={handleOutsideClick}
            className="language__animate">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.2 }}
                transition={{
                    duration: 0.8,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className="language__animate"
            >
                <S.LanguageMenuContainer onMouseLeave={() => setLanguageOpen(false)}>
                    <S.LanguageMenuList>
                        {language.map(lang => {
                            return (
                                <S.LanguageMenuItem
                                    key={lang}
                                    className={lang === currentlanguage ? 'active' : ''}
                                    onClick={() => switchLanguage(lang)}
                                >
                                        {FormatLocaleFlag(lang)}
                                        {lang}
                                        {lang === currentlanguage &&
                                            <CheckIcon />
                                        }
                                </S.LanguageMenuItem>
                            )
                        })}
                    </S.LanguageMenuList>
                </S.LanguageMenuContainer>
            </motion.div>
        </ClickOutsideHandler>
    );
}

export default LanguageMenu;