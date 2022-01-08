import * as React from "react"
import { Parallax } from '@react-spring/parallax'

import Layout from "../components/layout"
import Hero from "../components/hero"
import Professor from "../components/professor"
import Event from "../components/event"
import Header from "../components/header"

const IndexPage = () => {
  return (
    <Layout>
      {/* <Header/> */}
      <Parallax pages={10}>
        <Hero offset={0}/>
        <Professor offset={1} />
        <Event offset={2} />
      </Parallax>
    </Layout>
  )
}

export default IndexPage
