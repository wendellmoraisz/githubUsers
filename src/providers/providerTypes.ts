import { ReactNode } from "react";

export interface User {
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

export interface Repositories {
    id: number
    name: string
    full_name: string
}

export interface GithubContextType {
    user: User
    getUser: (username: string) => void 
    getUserRepos: (username: string) => void 
    getUserStarred: (username: string) => void 
    loading: boolean
    hasUser: boolean
    repositories: Repositories[]
    starred: Repositories[]
}

export interface Props {
    children: ReactNode
}