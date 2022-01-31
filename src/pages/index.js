import * as React from "react"
import { Parallax } from '@react-spring/parallax'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Hero from "../components/hero"
import Professor from "../components/professor"
import Event from "../components/event"
import Header from "../components/header"
import Researchs from "../components/researchs"

const IndexPage = () => {
  return (
    <Layout>
      <Header/>
      <Parallax pages={10}>
        <Hero offset={0}/>
        <Professor offset={1} />
        <Researchs offset={2} />
        <Event offset={3} />
      </Parallax>
    </Layout>
  )
}

export default IndexPage
