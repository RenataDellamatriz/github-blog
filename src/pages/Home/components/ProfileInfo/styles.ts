import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  background-color: ${(props) => props.theme['base-profile']};

  width: 100%;
  padding: 32px 40px;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 450px) {
    text-align: center;
  }
`
export const HeaderProfile = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: baseline;
    cursor: pointer;

    gap: 8px;

    color: ${(props) => props.theme.blue};
    font-weight: bold;

    text-transform: uppercase;
    text-decoration: none;

    :hover {
      text-decoration: underline;
      transition: 0.2s;
    }
  }

  @media (max-width: 450px) {
    gap: 4px;
    flex-direction: column;
  }
`

export const Title = styled.h1`
  color: ${(props) => props.theme['base-title']};
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const Description = styled.p`
  margin-top: 8px;
  line-height: 25px;
  word-wrap: break-word;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;

  margin-top: 1.5rem;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 450px) {
    flex-direction: column;
  }
  div {
    display: flex;
    align-items: flex-start;
    gap: 8px;

    svg {
      color: ${(props) => props.theme['base-label']};
    }

    @media (max-width: 768px) {
      gap: 4px;
    }
  }
`
