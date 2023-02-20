import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/Header"
import { StaticImage } from "gatsby-plugin-image"

const pageStyles = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <main style={pageStyles}>
        <h1>Marco Medeiros</h1>
        <StaticImage 
          src="../images/logo.svg"
          alt="Marco's logo"
        />
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Marco Medeiros</title>
