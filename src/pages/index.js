import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"


const IndexPage = () => {
  const [view, setView] = React.useState('hero')
  React.useEffect(() => {
    return () => {
      console.log(view);
    };
  }, [view]);

  return (
    <Layout >
      <Header setView={setView}/>
      {(view === 'hero') ? ( <Hero /> ) : null }
      {(view === 'about') ? ( <About /> ) : null }
    </Layout>
  )
}

export default IndexPage