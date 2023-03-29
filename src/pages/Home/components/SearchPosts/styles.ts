import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  margin-top: 4.5rem;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  label {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
  }
  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
  input {
    margin-top: 0.75rem;
    width: 100%;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    ::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
    :focus {
      border: 1px solid ${(props) => props.theme.blue};
    }
  }
`
export const PostCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
