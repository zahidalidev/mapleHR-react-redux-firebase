import styled from 'styled-components'

export const Link = styled.a`
  font-size: 1rem;
  font-weight: 400;
`
export const DrawerWrapper = styled.div`
  width: 17rem;
`
export const Image = styled.img`
  height: 4rem;
  margin: 2rem;
  cursor: pointer;
`
export const DrawerList = styled.ul`
  margin: 1rem;
  margin-top: 0.5rem !important;
`
export const Logo = styled.img`
  background-color: white;
  height: 3rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
`
export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  z-index: 2;
  color: #fff;
`
export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: flexbox;
  flex-flow: column;
  align-items: center;
  height: 100%;
  margin-left: auto;
`
export const Nav = styled.nav`
  box-shadow: none;
  padding-bottom: 0;
  padding-top: 0;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: space-between;
`
export const Bars = styled.a`
  color: #fff !important;
  font-weight: bold;
  font-size: 3rem !important;
  cursor: pointer;
`
export const CollapseNav = styled.div`
  justify-content: space-between;
  padding-left: 1rem;
`

export const List = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  ${props =>
    props.navClass &&
    `height: 3.7rem;
  &:hover {
    background-color: #8f5c2c;
    border-bottom: 4px solid #40a4c8;
    color: #fff;
  }`}

  ${props =>
    props.isActive === 'active-menu-drawer'
      ? 'color: #40a4c8;'
      : props.isActive === 'active-menu'
      ? `background-color: #8f5c2c;
  border-bottom: 4px solid #40a4c8;
  color: #fff;`
      : null}
`
