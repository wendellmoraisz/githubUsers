import * as S from "./styles";

function Profile() {

    return (
        <S.Wrapper>
            <S.WrapperImage src="https://avatars.githubusercontent.com/wendellmoraisz"
                alt="Avatar do usuário"
            />
            <S.WrapperInfoUser>

            <div>
                <h1>Nome do user</h1>
                <S.WrapperUserName>
                <h3>Username: </h3>
                <a href="https://github.com/wendellmoraisz" target="_blank">username</a>
                </S.WrapperUserName>
            </div>
            <S.WrapperStatusCount>
                <div>
                    <h4>Seguidores</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>starreds</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Following</h4>
                    <span>5</span>
                </div>
            </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    );
}

export default Profile;