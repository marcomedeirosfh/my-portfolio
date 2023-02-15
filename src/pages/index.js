import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const pageStyles = {
  padding: '2rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

const IndexPage = () => {
  return (
    <Layout>
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
