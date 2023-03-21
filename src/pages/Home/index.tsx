import { PostCard } from './components/PostCard'
import { ProfileInfo } from './components/ProfileInfo'
import { HomeContainer, InputContainer, PostCardWrapper } from './styles'

export function Home() {
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
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostCardWrapper>
    </HomeContainer>
  )
}
