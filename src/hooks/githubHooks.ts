import { useContext } from "react";
import { GithubContext } from "../providers/githubProvider";

function useGithub () {
    const { user, getUser, loading, hasUser, getUserRepos, repositories, getUserStarred, starred } = useContext( GithubContext );

    return { user, getUser, loading, hasUser, getUserRepos, repositories, getUserStarred, starred };
};

export default useGithub;