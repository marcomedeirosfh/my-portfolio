import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root {
        --blue-900: #0A192F;
        --blue-100: #B2E9FF;
        --neon-green: #00F0B4;
        --white: #FFFFFF;
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
  }

  body {
    background: var(--blue-900);
    color: var(--neon-green)
  }
`

export default function Layout({ children }) {
    return (
      <React.Fragment>
        <GlobalStyle/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
        {children}
      </React.Fragment>
    )
  }