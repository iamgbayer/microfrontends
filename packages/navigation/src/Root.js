import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link, BrowserRouter } from 'react-router-dom'

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
    <BrowserRouter>
      <Container>
        <Reset />
        Navigation
        <Link to="">Home</Link>
        <Link to="/checkout">Checkout</Link>
      </Container>
    </BrowserRouter>
  )
}
