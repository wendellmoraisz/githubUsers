import React from "react";
import * as S from "./styles"

interface Props {
    children: JSX.Element[]
}

function Layout( { children }: Props) {
    return (
    <S.WrapperLayout>
        <header>aaa</header>
        {children}
    </S.WrapperLayout>
    );
}

export default Layout;