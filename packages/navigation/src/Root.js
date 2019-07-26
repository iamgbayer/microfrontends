import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const Container = styled.div`
  background-color: red;
  width: 280px;
  height: 100vh;
`

const Reset = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
  }
`

export default function Root() {
  return (
    <Container>
      <Reset />
      Navigation
    </Container>
  )
}
