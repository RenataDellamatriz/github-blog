/* eslint-disable camelcase */
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { PostCard } from './components/PostCard'
import { ProfileInfo } from './components/ProfileInfo'
import { HomeContainer, PostCardWrapper, SearchInputContainer } from './styles'

export interface Post {
  id: number
  title: string
  comments: string
  created_at: string
  username: string
  url: string
  body: string
  number: number
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = useCallback(async (query: string | null) => {
    const response = await api.get(
      `search/issues?q=${query}repo:RenataDellamatriz/github-blog`,
    )

    setPosts(response.data.items)
  }, [])

  useEffect(() => {
    fetchPosts('')
  }, [fetchPosts])

  return (
    <HomeContainer>
      <ProfileInfo />
      <SearchInputContainer>
        <div>
          <label htmlFor="">Publicações</label>
          <span>{posts.length} publicações</span>
        </div>
        <input
          type="text"
          placeholder="Digite aqui para tecle 'Enter' buscar conteúdo"
          onKeyDown={(e) =>
            e.key === 'Enter' && fetchPosts(e.currentTarget.value)
          }
        />
      </SearchInputContainer>

      <PostCardWrapper>
        {posts &&
          posts.map((post) => {
            return <PostCard key={`${post.id} - ${post.number}`} post={post} />
          })}
      </PostCardWrapper>
    </HomeContainer>
  )
}
