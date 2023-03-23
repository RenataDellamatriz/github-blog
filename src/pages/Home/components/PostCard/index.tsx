import {
  PostCardContainer,
  PostDescription,
  PostHeader,
  PostTitle,
} from './styles'

interface PostProps {
  title: string
  date: string
  body: string
}

export function PostCard({ title, date, body }: PostProps) {
  return (
    <PostCardContainer to="/post" title="Post">
      <PostHeader>
        <PostTitle>{title}</PostTitle>
        <span>{date}</span>
      </PostHeader>
      <PostDescription>
        <p>{body}</p>
      </PostDescription>
    </PostCardContainer>
  )
}
