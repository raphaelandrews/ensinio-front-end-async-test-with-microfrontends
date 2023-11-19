import useInstanceTranslation from '../lib/useInstanceTranslation';
import TranslationsEN from './en';
import TranslationsES from './es';
import TranslationsTP from './pt';

const NEXT_HOST_I18N_INSTANCE_NAME = "next-host";
export const useNextHostTranslation = useInstanceTranslation(NEXT_HOST_I18N_INSTANCE_NAME, {
    en: TranslationsEN,
    es: TranslationsES,
    pt: TranslationsTP,
});

export default useNextHostTranslation;