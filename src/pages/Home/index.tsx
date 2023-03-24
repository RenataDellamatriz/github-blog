/* eslint-disable camelcase */
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { PostCard } from './components/PostCard'
import { ProfileInfo } from './components/ProfileInfo'
import { HomeContainer, InputContainer, PostCardWrapper } from './styles'

export interface Post {
  id: number
  title: string
  comments: string
  createdAt: string
  username: string
  url: string
  body: string
  number: number
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
  number: number
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchIssues = useCallback(async () => {
    const response: PostRaw[] = await (
      await api.get(`repos/RenataDellamatriz/github-blog/issues`)
    ).data

    const getPosts: Post[] = response.map((post) => {
      const {
        title,
        comments,
        html_url: url,
        created_at,
        user,
        body,
        id,
        number,
      } = post

      return {
        id,
        title,
        comments,
        url,
        createdAt: formatDistanceToNow(new Date(created_at), {
          locale: ptBR,
          addSuffix: true,
        }),
        username: user.login,
        body,
        number,
      }
    })

    setPosts(getPosts)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <HomeContainer>
      <ProfileInfo />
      <InputContainer>
        <div>
          <label htmlFor="">Publicações</label>
          <span>{posts.length} publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </InputContainer>

      <PostCardWrapper>
        {posts.map((post) => {
          return <PostCard key={`${post.id} - ${post.number}`} post={post} />
        })}
      </PostCardWrapper>
    </HomeContainer>
  )
}
