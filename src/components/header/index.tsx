import { useState } from "react";
import useGithub from "../../hooks/githubHooks";
import * as S from "./styles"

function Header() {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState('');

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    }

    return (
        <header>
            <S.Wrapper>
                <input type="text"
                 placeholder="Digite o nome de usuário para pesquisa"
                 onChange={e => setUsernameForSearch(e.target.value)}/>
                <button type="submit" onClick={submitGetUser}>
                    <span>Buscar</span>
                </button>
            </S.Wrapper>
        </header>
    );
}

export default Header;