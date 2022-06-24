import { useContext } from "react";
import { GithubContext } from "../providers/githubProvider";

function useGithub () {
    const githubState = useContext( GithubContext );

    return { githubState };
};

export default useGithub;