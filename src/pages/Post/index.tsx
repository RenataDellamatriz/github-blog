/* eslint-disable camelcase */
import {
  PostConteiner,
  PostContent,
  PostFooter,
  PostInfoContainer,
  PostTitle,
} from './styles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { NavLink, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { FaCalendarDay, FaComment, FaExternalLinkAlt } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useWindowSize } from '../../hooks/useWindowSize'

interface PostDetail {
  id: number
  title: string
  comments: number
  createdAt: string
  username: string
  url: string
  body: string
}

export function Post() {
  const [post, setPost] = useState<PostDetail>({} as PostDetail)
  const { numberId } = useParams()
  const { width } = useWindowSize()

  const fetchPost = useCallback(async () => {
    const response = await api.get(
      `repos/RenataDellamatriz/github-blog/issues/${numberId}`,
    )

    const {
      title,
      comments,
      html_url: url,
      created_at,
      user,
      body,
      id,
    } = response.data

    const selectedPost = {
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
    }

    setPost(selectedPost)
  }, [numberId])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return (
    <PostConteiner>
      <PostInfoContainer>
        <nav>
          <NavLink to="/">
            <IoIosArrowBack size={16} />
            {width < 400 ? '' : ' voltar'}
          </NavLink>
          <a href={post.url}>
            {width < 400 ? '' : ' ver no github'}
            <FaExternalLinkAlt />
          </a>
        </nav>

        <PostTitle>{post.title}</PostTitle>
        <PostFooter>
          <div>
            <BsGithub size={18} />
            <span>{post.username}</span>
          </div>
          <div>
            <FaCalendarDay size={18} />
            <span>{post.createdAt}</span>
          </div>
          <div>
            <FaComment size={18} />
            <span>{post.comments} comentários</span>
          </div>
        </PostFooter>
      </PostInfoContainer>
      <PostContent>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </PostContent>
    </PostConteiner>
  )
}
