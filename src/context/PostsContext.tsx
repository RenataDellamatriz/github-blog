/* eslint-disable camelcase */
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

import { api } from '../lib/axios'

interface Post {
  id: number
  title: string
  comments: string
  createdAt: string
  username: string
  html_url: string
  body: string
}

interface PostRaw {
  id: number
  title: string
  comments: string
  created_at: string
  user: {
    login: string
  }
  html_url: string
  body: string
}

interface PostsContextType {
  posts: Post[]
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsContextProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchIssues = useCallback(async () => {
    const response: PostRaw[] = await (
      await api.get(`repos/RenataDellamatriz/github-blog/issues`)
    ).data

    const getPosts: Post[] = response.map((post) => {
      const { title, comments, html_url, created_at, user, body, id } = post
      return {
        id,
        title,
        comments,
        html_url,
        createdAt: formatDistanceToNow(new Date(created_at), {
          locale: ptBR,
          addSuffix: true,
        }),
        username: user.login,
        body,
      }
    })

    setPosts(getPosts)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  )
}
