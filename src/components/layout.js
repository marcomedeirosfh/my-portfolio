import React from "react"
import { createGlobalStyle } from "styled-components"
import logo from '../images/logo.svg'

const GlobalStyle = createGlobalStyle`
  :root {
    --blue-900: #0A192F;
    --blue-500: #10285E;
    --blue-100: #B2E9FF;
    --green-100: #40FFE6;
    --green-900: #00F0B4;
    --white: #F4FDFE;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
  }

  body {
    margin-top: 80px;
    background: var(--blue-900);
    color: var(--blue-100);
    font-size: 16px;
    display: flex;
    flex-direction: column;
    padding: 5rem;
  }

  .highlight {
    color: var(--white);
    font-weight: 500;
  }

  @media (max-width: 740px) {
      body {
        padding: 1rem;
      }
    }
`

export default function Layout({ children }) {
    return (
      <React.Fragment>
        <GlobalStyle/>
        <title>Marco Medeiros - UI and UX</title>
        <meta name="description" content="Designer and developer - React - Figma - HTML - CSS - Javascript"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet"></link>
        {children}
      </React.Fragment>
    )
  }