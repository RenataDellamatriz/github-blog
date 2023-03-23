import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '../../context/PostsContext'
import { PostCard } from './components/PostCard'
import { ProfileInfo } from './components/ProfileInfo'
import { HomeContainer, InputContainer, PostCardWrapper } from './styles'

export function Home() {
  const posts = useContextSelector(PostsContext, (context) => {
    return context.posts
  })

  console.log(posts)

  return (
    <HomeContainer>
      <ProfileInfo />
      <InputContainer>
        <div>
          <label htmlFor="">Publicações</label>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </InputContainer>

      <PostCardWrapper>
        {posts.map((post) => {
          return (
            <PostCard
              key={post.id}
              title={post.title}
              date={post.createdAt}
              body={post.body}
            />
          )
        })}
      </PostCardWrapper>
    </HomeContainer>
  )
}
