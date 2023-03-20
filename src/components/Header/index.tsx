import { HeaderContainer } from './styles'
import headerLogo from '../../assets/headerBackgroundWithLogo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerLogo} alt="logo" />
    </HeaderContainer>
  )
}
