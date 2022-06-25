import { useContext } from "react";
import { GithubContext } from "../providers/githubProvider";

function useGithub () {
    const { user, getUser } = useContext( GithubContext );

    return { user, getUser };
};

export default useGithub;