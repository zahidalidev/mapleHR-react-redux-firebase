import styled from 'styled-components'
import { colors } from 'config/theme'

export const BurgerWrapper = styled.div`
  width: 43.75rem;
  margin: auto;
  height: 37.5rem;
  text-align: center;
  font-weight: bold;
  overflow-y: auto;
  font-size: 1.2rem;
  @media (max-width: 500px) {
    width: 24rem;
    height: 24rem;
  }
`

export const BreadTop = styled.div`
  height: 20%;
  width: 80%;
  background: linear-gradient(#bc581e, #e27b36);
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
  position: relative;
`

export const BreadBottom = styled.div`
  height: 13%;
  width: 80%;
  background: linear-gradient(#f08e4a, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
`
export const Seeds1 = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: ${colors.white};
  left: 30%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(-20deg);
  box-shadow: inset -2px -3px ${colors.grey};

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${colors.white};
    left: -170%;
    top: -260%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px 2px ${colors.grey};
  }

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #fff;
    left: 180%;
    top: -50%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px -3px ${colors.grey};
  }
`

export const Seeds2 = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: ${colors.white};
  left: 64%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(10deg);
  box-shadow: inset -3px 0 ${colors.grey};

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${colors.white};
    left: 150%;
    top: -130%;
    border-radius: 40%;
    transform: rotate(90deg);
    box-shadow: inset 1px 3px ${colors.grey};
  }
`
