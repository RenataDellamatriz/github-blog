import {
  Description,
  Footer,
  HeaderProfile,
  ProfileContainer,
  Title,
} from './styles'
import { BsGithub, BsFillBuildingFill } from 'react-icons/bs'
import { FaUserFriends, FaExternalLinkAlt } from 'react-icons/fa'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

interface UserProps {
  name: string
  username: string
  imgUrl: string
  url: string
  description: string
  company: string
  followers: number
}

export function ProfileInfo() {
  const [user, setUser] = useState<UserProps>()

  const fetchUserData = useCallback(async () => {
    const response = await api.get(`users/renatadellamatriz`)
    const {
      name,
      avatar_url: avatarUrl,
      html_url: htmlUrl,
      company,
      followers,
      bio,
      login,
    } = response.data

    const newUser = {
      name,
      imgUrl: avatarUrl,
      url: htmlUrl,
      company,
      followers,
      description: bio,
      username: login,
    }
    setUser(newUser)
  }, [])

  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])

  return (
    <ProfileContainer>
      <img src={user?.imgUrl} alt="profile_image" />
      <div>
        <HeaderProfile>
          <Title>{user?.name}</Title>
          <a href={`https://github.com/${user?.username}`}>
            Github <FaExternalLinkAlt />
          </a>
        </HeaderProfile>
        <Description>{user?.description}</Description>

        <Footer>
          <div>
            <BsGithub size={18} />
            <span>{user?.username}</span>
          </div>
          <div>
            <BsFillBuildingFill size={18} />
            <span>{user?.company}</span>
          </div>
          <div>
            <FaUserFriends size={18} />
            <span>{user?.followers} followers</span>
          </div>
        </Footer>
      </div>
    </ProfileContainer>
  )
}
