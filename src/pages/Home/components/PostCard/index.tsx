import {
  PostCardContainer,
  PostDescription,
  PostHeader,
  PostTitle,
} from './styles'

export function PostCard() {
  return (
    <PostCardContainer>
      <PostHeader>
        <PostTitle>JavaScript data types and data structures</PostTitle>
        <span>Há 1 dia</span>
      </PostHeader>
      <PostDescription>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types: let foo = 42; // foo is now a number
          foo = bar; // foo is now a string foo = true; // foo is now a boolean
        </p>
      </PostDescription>
    </PostCardContainer>
  )
}
