import React from "react";
import useGithub from "../../hooks/githubHooks";
import Header from "../header";
import NoSearch from "../no-search";
import * as S from "./styles"

interface Props {
    children: JSX.Element[]
}

function Layout({ children }: Props) {

    const { loading, hasUser } = useGithub();

    return (
        <S.WrapperLayout>
            <Header />
            {hasUser ? <>{loading ? <p>Loading...</p> : <>{children}</>}</> : <NoSearch />}
        </S.WrapperLayout>
    );
}

export default Layout;