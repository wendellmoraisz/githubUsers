import React from "react";

interface Props {
    children: JSX.Element[]
}

function Layout( { children }: Props) {
    return (
    <section>
        <header>aaa</header>
        {children}
    </section>
    );
}

export default Layout;