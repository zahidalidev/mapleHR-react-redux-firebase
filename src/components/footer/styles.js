import styled from 'styled-components'

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`

export const OrderButton = styled.button`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: auto;
  background-color: #dad735;
  outline: none;
  cursor: pointer;
  border: 1px solid #966909;
  color: #966909;
  font-family: inherit;
  font-size: 1rem;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;
  width: 14rem;

  background-color: ${props => (props.disabled ? '#c7c6c6' : '#a0db41')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  border: 1px solid ${props => (props.disabled ? '#ccc' : '#966909')};
  color: ${props => (props.disabled ? '#888888' : ' #966909')};

  &:hover {
    background-color: #a0db41;
    border: 1px solid #966909;
    color: #966909;
  }
`
