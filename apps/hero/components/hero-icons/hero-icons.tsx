import * as S from './hero-icons.styles';

import { CertifiedIcon } from "ui/assets/icons/certified-icon";
import { PlaylistsIcon } from "ui/assets/icons/playlists-icon";
import PingAnimate from "@/animations/ping-animate";
import ShakeAnimate from "@/animations/shake-animate";
import JumpAnimate from "@/animations/jump-animate";

const HomeIcons = () => {
    return (
        <S.HomeIconsContainer>
            <S.HomeIconsWrapper>
                <PingAnimate hoverY={50} hoverX={50} duration={0.6}>
                    <PlaylistsIcon />
                </PingAnimate>
                <ShakeAnimate >
                    <CertifiedIcon />
                </ShakeAnimate>
                <JumpAnimate hoverY={50} duration={0.6}>
                    <PlaylistsIcon />
                </JumpAnimate>
            </S.HomeIconsWrapper>
        </S.HomeIconsContainer>
    );
}

export default HomeIcons;