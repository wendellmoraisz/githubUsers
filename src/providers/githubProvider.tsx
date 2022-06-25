import { type } from "@testing-library/user-event/dist/type";
import React, { createContext, ReactNode, useCallback, useState } from "react";
import api from "../services/api";

interface User {
    id: number
    avatar: string
    login: string | null
    name: string 
    publicURL: string
    blog: string | null
    company: string | null
    location: string | null
    followers: number
    following: number
    publicGists: number
    publicRepos: number
}

interface Repositories {
    id: number
    name: string
    full_name: string
}

interface GithubContextType {
    user: User
    getUser: (username: string) => void 
    getUserRepos: (username: string) => void 
    getUserStarred: (username: string) => void 
    loading: boolean
    hasUser: boolean
    repositories: Repositories[]
    starred: Repositories[]
}

interface Props {
    children: ReactNode
}

export const GithubContext = createContext<GithubContextType>({
    user: {
        id: 0,
        avatar: '',
        login: null,
        name: '',
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
    getUserRepos: (username: string) => {},
    getUserStarred: (username: string) => {},
    loading: true,
    hasUser: false,
    repositories: [],
    starred: []
});

function GithubProvider({ children }: Props) {

    const [githubState, setGithubState] = useState({
        user: {
            id: 0,
            avatar: '',
            login: '',
            name: '',
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
        hasUser: false,
        repositories: [],
        starred: [],
    });

    const getUser = (username: string = githubState.user.name) => {
        api.get(`users/${username}`)
            .then(({ data }) => {
                setGithubState({
                     user: {
                        id: data.id,
                        avatar: data.avatar_url,
                        login: data.login,
                        name: data.name,
                        publicURL: data.html_url,
                        blog: data.blog,
                        company: data.company,
                        location: data.location,
                        followers: data.followers,
                        following: data.following,
                        publicGists: data.public_gists,
                        publicRepos: data.public_repos,
                    },
                    loading: true,
                    hasUser: true,
                    repositories: [],
                    starred: [],
                });
            })
            .finally(() => {
                setGithubState((prevState) => ({
                    ...prevState,
                    loading: false
                }));
            });
    }

    const getUserRepos = (username: string) => {
        api.get(`users/${username}/repos`)
        .then(({ data }) => {
                setGithubState((prevState => ({
                    ...prevState,
                    repositories: data,
                })));
            });
    }

    const getUserStarred = (username: string) => {
        api.get(`users/${username}/starred`)
        .then(({ data }) => {
                setGithubState((prevState => ({
                    ...prevState,
                    starred: data,
                })));
            });
    }

    const { user, loading, hasUser, repositories, starred } = githubState;
    const contextValue = {
        user,
        getUser: useCallback((username: string) => getUser(username), []),
        getUserRepos: useCallback((username: string) => getUserRepos(username), []),
        getUserStarred: useCallback((username: string) => getUserStarred(username), []),
        loading,
        hasUser,
        repositories,
        starred,
    }

    return (
        <GithubContext.Provider
            value={contextValue}>
            {children}
        </GithubContext.Provider>
    );
}

export default GithubProvider;