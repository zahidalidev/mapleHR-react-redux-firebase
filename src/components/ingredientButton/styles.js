import { colors } from 'config/theme'
import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2px 0;
`

export const Label = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`

export const Button = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid ${props => (props.disabled ? '#7e7365' : '#aa6817')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  outline: none;
`

export const LessButton = styled(Button)`
  background-color: ${props => (props.disabled ? '#ac9980' : '#d39952')};
  color: ${props => (props.disabled ? '#ccc' : colors.white)};

  &:hover {
    background-color: #daa972;
    color: white;
  }
`
export const MoreButton = styled(Button)`
  background-color: #8f5e1e;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #99703f;
    color: white;
  }
`
