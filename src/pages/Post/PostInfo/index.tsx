import { FaCalendarDay, FaComment, FaExternalLinkAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { PostFooter, PostInfoContainer, PostTitle } from './styles'
import { IoIosArrowBack } from 'react-icons/io'
import { BsGithub } from 'react-icons/bs'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <nav>
        <NavLink to="/">
          <IoIosArrowBack size={16} /> voltar
        </NavLink>
        <a>
          ver no github <FaExternalLinkAlt />
        </a>
      </nav>

      <PostTitle>JavaScript data types and data structures</PostTitle>
      <PostFooter>
        <div>
          <BsGithub size={18} />
          <span>renatadellmatriz</span>
        </div>
        <div>
          <FaCalendarDay size={18} />
          <span>Há 1 dia</span>
        </div>
        <div>
          <FaComment size={18} />
          <span>5 comentários</span>
        </div>
      </PostFooter>
    </PostInfoContainer>
  )
}
