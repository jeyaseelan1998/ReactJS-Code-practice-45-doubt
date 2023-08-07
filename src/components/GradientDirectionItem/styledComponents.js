import styled from 'styled-components'

export const GradientDirectionItemContainer = styled.li`
  margin: 15px;
`

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 12px 24px;
  background-color: #ffffff;
  color: #334155;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  opacity: ${props => (props.isActive ? '1' : '0.5')};
  cursor: pointer;
`
