import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const Frame = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`

export const Arrows = styled.div``

interface ArrowProps {
  color: string
}

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-style: solid;
  border-color: ${(props: ArrowProps) => props.color};
  border-width: 0 6px 6px 0;
  display: inline-block;
  padding: 6px;
  cursor: pointer;
`

export const ArrowPrev = styled(Arrow)`
  left: 12px;
  transform: rotate(135deg);
`

export const ArrowNext = styled(Arrow)`
  right: 12px;
  transform: rotate(-45deg);
`

export const Nav = styled.div`
  position: absolute;
  bottom: 12px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

interface NavItemProps {
  color: string
  active: boolean
}

export const NavItem = styled.div`
  width: 12px;
  height: 12px;
  margin: 3px 6px;
  border-radius: 50%;
  background: ${(props: NavItemProps) => props.color};
  opacity: ${(props: NavItemProps) => (props.active ? 1.0 : 0.5)};
  cursor: pointer;
`
