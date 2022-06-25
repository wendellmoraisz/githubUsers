import { useEffect, useState } from "react";
import useGithub from "../../hooks/githubHooks";
import RepositoryItem from "../repository-item";
import * as S from "./styles";

function Repositories() {
    const { repositories, user, getUserRepos, starred, getUserStarred } = useGithub();
    const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

    useEffect(() => {
        if (user.login) {
            getUserRepos(user.login);
            getUserStarred(user.login);
        }

        setHasUserForSearchRepos(!!repositories);
    }, [user.login]);

    return (
        <>
            {hasUserForSearchRepos ? (
                <S.WrapperTabs
                    selectedTabClassName="is-selected"
                    selectedTabPanelClassName="is-selected"
                >
                    <S.WrapperTabList>
                        <S.WrapperTab>Repositories</S.WrapperTab>
                        <S.WrapperTab>Starred</S.WrapperTab>
                    </S.WrapperTabList>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                        {repositories.map(repo => {
                            return (
                                <RepositoryItem
                                    key={repo.id}
                                    name={repo.name}
                                    linkToRepo={repo.full_name}
                                    fullName={repo.full_name}
                                />
                            );
                        })}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                    <S.WrapperTabPanel>
                        <S.WrapperList>

                        {starred.map(item => {
                            return (
                                <RepositoryItem
                                key={item.id}
                                    name={item.name}
                                    linkToRepo={item.full_name}
                                    fullName={item.full_name}
                                    />
                                    );
                                })}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                </S.WrapperTabs>
            ) : (
                <></>
            )
            }
        </>
    );
}

export default Repositories;