import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  gap: 32px;
  background-color: ${(props) => props.theme['base-profile']};

  width: 100%;
  padding: 32px 40px;
  border-radius: 10px;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 8px;

    color: ${(props) => props.theme.blue};
    font-weight: bold;
    font-size: 0.75rem;

    text-transform: uppercase;
    text-decoration: none;
  }
`
export const PostTitle = styled.h1`
  color: ${(props) => props.theme['base-title']};
  margin-top: 1.25rem;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`
export const PostFooter = styled.footer`
  display: flex;
  justify-content: flex-start;
  gap: 32px;
  margin-top: 8px;

  div {
    display: flex;
    align-items: flex-start;
    gap: 8px;

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`