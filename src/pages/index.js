import * as React from "react"
import { Parallax } from '@react-spring/parallax'

import Layout from "../components/layout"
import Hero from "../components/hero"
import Professor from "../components/professor"

const IndexPage = () => {
  return (
    <Layout>
      <Parallax pages={10}>
        <Hero offset={0}/>
        <Professor offset={1.5} />
      </Parallax>
    </Layout>
  )
}

export default IndexPage
