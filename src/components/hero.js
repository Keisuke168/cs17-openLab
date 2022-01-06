import styled from "@emotion/styled"
import * as React from 'react'
import { ParallaxLayer } from "@react-spring/parallax"
import Sample from '../assets/people.mp4'

const Video = styled.video`
    position: fixed;
    right: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    z-index: -999;
`

const H1 = styled.h1`
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

const Hero = ({offset, factor = 1 }) => {
    return(
        <div>
            <ParallaxLayer offset={offset} factor={factor}>
                <Video autoPlay loop muted playsInline>
                    <source src={Sample} type="video/mp4" />
                </Video>
            </ParallaxLayer>
            <ParallaxLayer speed={0} offset={offset} factor={factor}>
                <H1>CS17 滝口研究室</H1>
            </ParallaxLayer>
        </div>
    )
}
export default Hero