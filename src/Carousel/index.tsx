import React, { MouseEvent, RefObject, useMemo, useRef } from 'react'
import useCarousel from './hooks/useCarousel'
import useGestureEvents from './hooks/useGestureEvents'
import { ArrowNext, ArrowPrev, Arrows, Container, Frame, Nav, NavItem, Wrapper } from './styled'

interface Props {
  children: JSX.Element[]
  options?: Options
}

interface Options {
  duration?: number
  threshold?: number
  dotColor?: string
  arrowColor?: string
  loop?: boolean
  auto?: boolean
  interval?: number
}

const defaultOptions = {
  duration: 500,
  threshold: 100,
  dotColor: '#000',
  arrowColor: '#000',
  loop: true,
  auto: true,
  interval: 2000,
}

export default function Carousel({ children: frames, options }: Props) {
  const _options = { ...defaultOptions, ...options }
  const containerRef: RefObject<HTMLDivElement> = useRef(null)
  const {
    current,
    containerStyle,
    framesStyle,
    isFirstPage,
    isLastPage,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onClickNav,
    normalizeFrames,
  } = useCarousel({
    frames,
    containerRef,
    options: _options,
  })
  const events = useGestureEvents({ onStart: onTouchStart, onMove: onTouchMove, onEnd: onTouchEnd })

  const frameContents = useMemo(
    () =>
      normalizeFrames
        .map((frame, i) => {
          const n = i - 1
          if (n === current) {
            return frame
          } else if (n < current) {
            return !_options.loop && isFirstPage ? null : frame
          } else if (n > current) {
            return !_options.loop && isLastPage ? null : frame
          }
        })
        .map((frame, i) => (
          <Frame key={i} style={framesStyle[i]}>
            {frame}
          </Frame>
        )),
    [current, normalizeFrames]
  )

  const handleNavToPrev = () => {
    onClickNav('prev')
  }
  const handleNavToNext = () => {
    onClickNav('next')
  }
  const handleNavToTarget = (event: MouseEvent<HTMLDivElement>) => {
    const el = event.currentTarget
    el.dataset.frameIndex && onClickNav(+el.dataset.frameIndex)
  }

  return (
    <Wrapper>
      <Container style={containerStyle} ref={containerRef} {...events}>
        {frameContents}
      </Container>
      <Arrows>
        {(_options.loop || !isFirstPage) && <ArrowPrev color={_options.arrowColor} onClick={handleNavToPrev} />}
        {(_options.loop || !isLastPage) && <ArrowNext color={_options.arrowColor} onClick={handleNavToNext} />}
      </Arrows>
      <Nav>
        {frames.map((_, i) => (
          <NavItem
            active={current === i}
            color={_options.dotColor}
            key={i}
            data-frame-index={i}
            onClick={handleNavToTarget}
          />
        ))}
      </Nav>
    </Wrapper>
  )
}
