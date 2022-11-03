// Style your elements here
import styled from 'styled-components'

export const DirectionItem = styled.li`
  list-style: none;
`

export const Button = styled.button`
  background-color: ${props => (props.activeId ? '#ffffff' : '#ffffff59')};
  color: #1e293b;
  padding: 8px 17px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: ${props => (props.activeId ? 1 : 0.5)};
  font-size: 15px;
`
