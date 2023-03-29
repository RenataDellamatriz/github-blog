import { formatDistanceToNowStrict } from 'date-fns'
import getDateFnsLocale from '../../../../utils/formatDate'
import { Post } from '../SearchPosts'
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

  const formattedDate = formatDistanceToNowStrict(new Date(createdAt), {
    locale: getDateFnsLocale(),
    addSuffix: true,
  })

  return (
    <PostCardContainer to={`${number}`} title="Post">
      <PostHeader>
        <PostTitle>{title}</PostTitle>
        <time>{formattedDate}</time>
      </PostHeader>
      <PostDescription>
        <p>{body}</p>
      </PostDescription>
    </PostCardContainer>
  )
}
