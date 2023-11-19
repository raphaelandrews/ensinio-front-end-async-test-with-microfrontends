import { ReactNode } from "react";
import * as S from "./container.styles";

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <S.ContainerWrapper>
            {children}
        </S.ContainerWrapper>
    );
}

export default Container;