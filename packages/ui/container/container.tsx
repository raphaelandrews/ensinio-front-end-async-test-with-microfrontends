import type { ReactNode } from "react";
import * as S from "./container.styles";

export function Container({ children }: { children: ReactNode }):JSX.Element {
    return (
        <S.ContainerWrapper>
            {children}
        </S.ContainerWrapper>
    );
}
