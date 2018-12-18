import React, { ChangeEvent, useMemo, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Carousel from './Carousel'

const GlobalStyle = createGlobalStyle`
  ${reset}
`

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
  padding: 24px 0;
  > span {
    font-size: 36px;
  }
`

const Section = styled.div`
  width: 95%;
  height: 300px;
  margin: 0 auto;
`

const Widget = styled.div`
  margin-top: 24px;
  padding: 12px 0;
  background: #ddd;
`

const WidgetInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 12px 0;
  > * {
    margin: 3px 6px;
    font-size: 12px;
  }
  label {
    font-weight: bold;
  }
`

const Frame = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  overflow: hidden;
  a {
    height: 100%;
  }
  img {
    width: auto;
    height: 100%;
  }
`

export default function App() {
  const [length, setLength] = useState(5)
  const [loop, setLoop] = useState(false)
  const [auto, setAuto] = useState(false)
  const [dotColor, setDotColor] = useState('#ffffff')
  const [arrowColor, setArrowColor] = useState('#ffffff')
  const [duration, setDuration] = useState(500)
  const [interval, setInterval] = useState(2000)
  const [threshold, setThreshold] = useState(100)

  const handleLoop = () => setLoop((prev: boolean) => !prev)
  const handleAuto = () => setAuto((prev: boolean) => !prev)
  const handleDotColor = (event: ChangeEvent<HTMLInputElement>) => setDotColor(event.target.value)
  const handleArrowColor = (event: ChangeEvent<HTMLInputElement>) => setArrowColor(event.target.value)
  const handleDuration = (event: ChangeEvent<HTMLInputElement>) => setDuration(+event.target.value)
  const handleInterval = (event: ChangeEvent<HTMLInputElement>) => setInterval(+event.target.value)
  const handleThreshold = (event: ChangeEvent<HTMLInputElement>) => setThreshold(+event.target.value)
  const handleLength = (event: ChangeEvent<HTMLInputElement>) => setLength(+event.target.value)

  const frames = useMemo(
    () =>
      [...Array(length)].map((_: any, i: number) => (
        <Frame key={i}>
          <a href={`#${i}`}>
            <img src={`https://picsum.photos/800/200/?${i}`} />
          </a>
        </Frame>
      )),
    [length]
  )

  return (
    <>
      <GlobalStyle />
      <Title>
        <span>Carousel</span>
        <br />
        with React Hooks
      </Title>
      <Section>
        <Carousel options={{ arrowColor, auto, dotColor, duration, interval, loop, threshold }}>{frames}</Carousel>
      </Section>
      <Widget>
        <WidgetInner>
          <button onClick={handleLoop}>{`${loop ? 'disable' : 'enable'} to "Loop"`}</button>
          <button onClick={handleAuto}>{`${auto ? 'disable' : 'enable'} to "Auto"`}</button>
        </WidgetInner>
        <WidgetInner>
          <label>
            Dot Color: <input type="color" onChange={handleDotColor} value={dotColor} />
          </label>
          <label>
            Arrow Color: <input type="color" onChange={handleArrowColor} value={arrowColor} />
          </label>
        </WidgetInner>
        <WidgetInner>
          <label>
            Duration(ms): <input type="number" onChange={handleDuration} value={duration} />
          </label>
          <label>
            Interval(ms): <input type="number" onChange={handleInterval} value={interval} />
          </label>
          <label>
            Threshold(px): <input type="number" onChange={handleThreshold} value={threshold} />
          </label>
        </WidgetInner>
        <WidgetInner>
          <label>
            Frame Length: <input type="number" onChange={handleLength} value={length} />
          </label>
        </WidgetInner>
      </Widget>
    </>
  )
}
