import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Post } from '../..'
import {
  PostCardContainer,
  PostDescription,
  PostHeader,
  PostTitle,
} from './styles'

interface PostProps {
  post: Post
}

export function PostCard({ post }: PostProps) {
  const { created_at: createdAt, body, title, number } = post

  const formattedDate = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PostCardContainer to={`${number}`} title="Post">
      <PostHeader>
        <PostTitle>{title}</PostTitle>
        <span>{formattedDate}</span>
      </PostHeader>
      <PostDescription>
        <p>{body}</p>
      </PostDescription>
    </PostCardContainer>
  )
}
