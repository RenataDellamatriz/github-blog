import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Post {
  title: string
  comments: string
  createdAt: string
  username: string
  url: string
  body: string
}

interface PostsContextType {
  posts: Post
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post>({} as Post)

  const fetchPosts = useCallback(async () => {
    const response = await api.get(
      ` /repos/renatadellamatriz/github-blog/issues/`,
    )
    setPosts(response.data)

    // const {
    //   title,
    //   comments,
    //   created_at: createdAt,
    //   user,
    //   html_url: htmlUrl,
    //   body,
    // } = response.data

    // const newPostObj = {
    //   title,
    //   username: user.login,
    //   comments,
    //   createdAt: formatDistanceToNow(new Date(createdAt), {
    //     locale: ptBR,
    //     addSuffix: true,
    //   }),
    //   url: htmlUrl,
    //   body,
    // }

    // setPosts(newPostObj)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  )
}
