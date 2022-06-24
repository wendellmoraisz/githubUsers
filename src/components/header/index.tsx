import * as S from "./styles"

function Header() {

    return (
        <header>
            <S.Wrapper>
                <input type="text" placeholder="Digite o nome de usuário para pesquisa"/>
                <button type="submit">
                    <span>Buscar</span>
                </button>
            </S.Wrapper>
        </header>
    );
}

export default Header;