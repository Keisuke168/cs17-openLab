import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { ParallaxLayer } from "@react-spring/parallax"
import ResearchLink from "./researchlink"
import styled from "@emotion/styled"

const Grid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 33% 33% 33%;
    grid-template-columns: 33% 33% 33%;
`

const colorSet =   ["linear-gradient(to right, #D4145A 0%, #FBB03B 100%)",
                    "linear-gradient(to right, #662D8C 0%, #ED1E79 100%)",
                    "linear-gradient(to right, #009245 0%, #FCEE21 100%)",
                    "linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"]



const Researchs = ({offset, factor=1}) => {
    const data = useStaticQuery(graphql`
        query {
            allMdx {
                nodes {
                    id
                    slug
                    frontmatter {
                    title
                    }
                }
            }
        }
    `)

    return (
        <ParallaxLayer offset={offset} factor={factor}>
            <Grid>
                {
                    data.allMdx.nodes.map((node, index) => (
                        <ResearchLink link={`/${node.slug}`} title={node.frontmatter.title}   bg={colorSet[index%4]}/>
                    ))
                }
            </Grid>
        </ParallaxLayer>
    )
}

export default Researchs