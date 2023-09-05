import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/Header"
import Hero from "../components/Hero"

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Hero />
    </Layout>
  )
}

export default IndexPage

export const Head = () => {
  <>
    <title>Marco Medeiros - UI and UX</title>
    <meta>Designer and developer - professional websites and online solutions. React - Figma - Wix</meta>
    <link rel="icon" type="image/png" href="../images/favicon.png" />
  </>
}