import styled from 'styled-components'
import { colors } from 'config/theme'

export const InputWrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 5px !important;
`

export const InputField = styled.input`
  width: 100%;
  padding: 6px 10px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid ${props => (props.invalid ? colors.red : '#ccc')};
  background-color: ${props => (props.invalid ? colors.salmon : colors.white)};
  font: inherit;
  display: block;

  &:focus {
    outline: none;
    background-color: #ccc;
  }
`

export const SelectWrapper = styled.select`
  width: 100%;
  padding: 6px 10px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid #ccc};
  background-color: ${colors.white};
  font: inherit;
  display: block;

  &:focus {
    outline: none;
    background-color: #ccc;
  }
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
`

export const SuccessButton = styled(Button)`
  color: ${props => (props.disabled ? '#ccc' : '#5c9210')};
  cursor: ${props => (props.disabled ? 'allowed' : 'not-allowed')};
`
export const DangerButton = styled(Button)`
  color: #944317;
`

export const Heading1 = styled.h1`
  display: block !important;
  font-size: 2em !important;
  margin-block-end: 0.67em !important;
  font-weight: bold !important;
`
export const Heading3 = styled.h3`
  display: block !important;
  font-size: 1.17em !important;
  margin-block-start: 1em !important;
  margin-block-end: 1em !important;
  margin-inline-start: 0px !important;
  margin-inline-end: 0px !important;
  font-weight: bold !important;
`
export const Heading4 = styled.h4`
  display: block !important;
  margin-block-start: 1.33em !important;
  margin-block-end: 1.33em !important;
  margin-inline-start: 0px !important;
  margin-inline-end: 0px !important;
  font-weight: bold !important;
`
export const Main = styled.main`
  margin-top: 7rem;
`
