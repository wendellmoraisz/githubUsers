import useGithub from "../../hooks/githubHooks";
import * as S from "./styles";

function Profile() {

    const { githubState } = useGithub()

    return (
        <S.Wrapper>
            <S.WrapperImage src="https://avatars.githubusercontent.com/wendellmoraisz"
                alt="Avatar do usuário"
            />
            <S.WrapperInfoUser>

            <div>
                <h1>{githubState?.user.name}</h1>
                <S.WrapperUserName>
                <h3>Username: </h3>
                <a 
                href={githubState?.user.publicURL}
                 target="_blank">
                    {githubState?.user.login}
                    </a>
                </S.WrapperUserName>
            </div>
            <S.WrapperStatusCount>
                <div>
                    <h4>Seguidores</h4>
                    <span>{githubState?.user.followers}</span>
                </div>
                <div>
                    <h4>Following</h4>
                    <span>{githubState?.user.following}</span>
                </div>
                <div>
                    <h4>Gists</h4>
                    <span>{githubState?.user.publicGists}</span>
                </div>
                <div>
                    <h4>Repos</h4>
                    <span>{githubState?.user.publicRepos}</span>
                </div>
            </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    );
}

export default Profile;