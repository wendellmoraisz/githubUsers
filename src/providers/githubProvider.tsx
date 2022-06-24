import { type } from "@testing-library/user-event/dist/type";
import React, { Children, createContext, Provider, ProviderProps, useState } from "react";

interface User {
    login: string | null,
    name: string | null,
    publicURL: string
    blog: string | null
    company: string | null
    location: string | null
    followers: number
    following: number
    publicGists: number
    publicRepos: number
}

interface GithubContextType {
    user: User
    repositories: [] | null
    starred: [] | null
}

export const GithubContext = createContext<GithubContextType | null>(null);

function GithubProvider ({ children }) {

    const [githubState, setGithubState] = useState({
        user: {
            login: null,
            name: null,
            publicURL: '',
            blog: null,
            company: null,
            location: null,
            followers: 0,
            following: 0,
            publicGists: 0,
            publicRepos: 0,
        },
        repositories: null,
        starred: null,
    });

    const contextValue = githubState;

    return (
        <GithubContext.Provider
            value={contextValue}>
            {children}
        </GithubContext.Provider>
    );
}

export default GithubProvider;