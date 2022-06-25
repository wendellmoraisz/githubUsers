import { type } from "@testing-library/user-event/dist/type";
import React, { createContext, ReactNode, useCallback, useState } from "react";
import api from "../services/api";

interface User {
    avatar: string
    login: string | null
    name: string | null
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
    getUser: (username: string) => void 
    loading: boolean
    hasUser: boolean
}

interface Props {
    children: ReactNode
}

export const GithubContext = createContext<GithubContextType>({
    user: {
        avatar: '',
        login: null,
        name: null,
        publicURL: '',
        blog: null,
        company: null,
        location: null,
        following: 0,
        followers: 0,
        publicGists: 0,
        publicRepos: 0,
    },
    getUser: (username: string) => {},
    loading: true,
    hasUser: false,
});

function GithubProvider({ children }: Props) {

    const [githubState, setGithubState] = useState({
        user: {
            avatar: '',
            login: null,
            name: null,
            publicURL: '',
            blog: null,
            company: null,
            location: null,
            following: 0,
            followers: 0,
            publicGists: 0,
            publicRepos: 0,
        },
        loading: true,
        hasUser: false
    });

    const getUser = (username: string) => {
        api.get(`users/${username}`)
            .then(({ data }) => {
                setGithubState({
                     user: {
                        avatar: data.avatar_url,
                        login: data.login,
                        name: data.name,
                        publicURL: data.html_url,
                        blog: data.blog,
                        company: data.company,
                        location: data.location,
                        followers: data.followers,
                        following: data.following,
                        publicGists: data.publicGists,
                        publicRepos: data.publicRepos,
                    },
                    loading: true,
                    hasUser: true
                });
            })
            .finally(() => {
                setGithubState((prevState) => ({
                    ...prevState,
                    loading: false
                }))
            })
    }

    const { user, loading, hasUser } = githubState;
    const contextValue = {
        user,
        getUser: useCallback((username: string) => getUser(username), []),
        loading,
        hasUser
    }

    return (
        <GithubContext.Provider
            value={contextValue}>
            {children}
        </GithubContext.Provider>
    );
}

export default GithubProvider;