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
  const { createdAt, body, title, number } = post

  return (
    <PostCardContainer to={`${number}`} title="Post">
      <PostHeader>
        <PostTitle>{title}</PostTitle>
        <span>{createdAt}</span>
      </PostHeader>
      <PostDescription>
        <p>{body}</p>
      </PostDescription>
    </PostCardContainer>
  )
}
