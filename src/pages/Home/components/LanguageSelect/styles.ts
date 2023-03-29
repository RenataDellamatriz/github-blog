import styled from 'styled-components'
import * as Select from '@radix-ui/react-select'

export const LanguageSelectorButton = styled(Select.Trigger)`
  position: absolute;
  right: 30px;
  top: 20px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  svg {
    color: ${(props) => props.theme.blue};
    font-size: 32px;
    filter: drop-shadow(1px 1px 11px rgba(255, 255, 255, 0.6));
  }
`
export const SelectPortal = styled(Select.Portal)`
  position: fixed;
  top: 50px;
  right: 30px;
  margin-left: -75px;

  padding: 0.75rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-background']};
  color: ${(props) => props.theme['base-subtitle']};
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);

  font-weight: 700;
`

export const SelectContent = styled(Select.Content)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`
export const SelectItem = styled(Select.Item)`
  cursor: pointer;
  padding: 5px 10px;
  gap: 5px;

  svg {
    font-size: 1rem;
    color: ${(props) => props.theme.blue};
    margin-left: 7px;
  }
`
