import styled from 'styled-components'

export const PostCardContainer = styled.div`
  padding: 32px;
  max-height: 260px;
  width: 100%;
  overflow: hidden;
  border: 1px solid transparent;

  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  cursor: pointer;

  :hover {
    border: 1px solid ${(props) => props.theme['base-label']};
  }
`

export const PostHeader = styled.header`
  display: flex;
  gap: 1rem;

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
    white-space: nowrap;
  }
`
export const PostTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
`

export const PostDescription = styled.main`
  margin-top: 1.25rem;
  height: 112px;
  overflow: hidden;
  p {
    color: ${(props) => props.theme['base-text']};
  }
`