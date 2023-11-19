import { BrazilFlagIcon } from "ui/assets/icons/brazil-flag-icon";
import { UsaFlagIcon } from "ui/assets/icons/usa-flag-icon";
import { SpainFlagIcon } from "ui/assets/icons/spain-flag-icon";

const FormatLocaleFlag = (flag: string) => {
    let localeFlag;
    switch (flag) {
        case 'pt':
            localeFlag = <BrazilFlagIcon />;
            break;
        case 'en':
            localeFlag = <UsaFlagIcon />;
            break;
        case 'es':
            localeFlag = <SpainFlagIcon />;
            break;
    }
    return localeFlag;
}

export default FormatLocaleFlag;