import { useContext } from "react";
import { GithubContext } from "../providers/githubProvider";

function useGithub () {
    const { user, getUser, loading, hasUser } = useContext( GithubContext );

    return { user, getUser, loading, hasUser };
};

export default useGithub;