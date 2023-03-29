/* eslint-disable camelcase */
import { SearchPosts } from './components/SearchPosts'
import { ProfileInfo } from './components/ProfileInfo'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileInfo />

      <SearchPosts />
    </HomeContainer>
  )
}
