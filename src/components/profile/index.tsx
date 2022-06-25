import useGithub from "../../hooks/githubHooks";
import * as S from "./styles";

function Profile() {

    const { user } = useGithub()

    return (
        <S.Wrapper>
            <S.WrapperImage src={user.avatar}
                alt="Avatar do usuário"
            />
            <S.WrapperInfoUser>

                <div>
                    <h1>{user.name}</h1>
                    <S.WrapperUserName>
                        <h3>Username: </h3>
                        <a
                            href={user.publicURL}
                            target="_blank">
                            {user.login}
                        </a>
                    </S.WrapperUserName>
                    <S.WrapperUserName>
                        <h3>Company: </h3>
                        <span>{user.company}</span>
                    </S.WrapperUserName>
                    <S.WrapperUserName>
                        <h3>Location: </h3>
                        <span>{user.location}</span>
                    </S.WrapperUserName>
                    <S.WrapperUserName>
                        <h3>Blog: </h3>
                        <span>{user.blog}</span>
                    </S.WrapperUserName>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Seguidores</h4>
                        <span>{user.followers}</span>
                    </div>
                    <div>
                        <h4>Following</h4>
                        <span>{user.following}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span>{user.publicGists}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{user.publicRepos}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    );
}

export default Profile;