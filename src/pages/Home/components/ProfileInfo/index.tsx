import {
  Description,
  Footer,
  HeaderProfile,
  ProfileContainer,
  Title,
} from './styles'
import { BsGithub, BsFillBuildingFill } from 'react-icons/bs'
import { FaUserFriends, FaExternalLinkAlt } from 'react-icons/fa'

export function ProfileInfo() {
  return (
    <ProfileContainer>
      <img src="https://github.com/renatadellamatriz.png" alt="profile_image" />
      <div>
        <HeaderProfile>
          <Title>Renata Dellamatriz</Title>
          <a href="https://github.com/renatadellamatriz">
            Github <FaExternalLinkAlt />
          </a>
        </HeaderProfile>
        <Description>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Description>

        <Footer>
          <div>
            <BsGithub size={18} />
            <span>renatadellmatriz</span>
          </div>
          <div>
            <BsFillBuildingFill size={18} />
            <span>Sítio Digital</span>
          </div>
          <div>
            <FaUserFriends size={18} />
            <span>12 followers</span>
          </div>
        </Footer>
      </div>
    </ProfileContainer>
  )
}
