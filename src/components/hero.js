import styled from "@emotion/styled"
import * as React from 'react'
import { ParallaxLayer } from "@react-spring/parallax"
import Sample from '../assets/1000A500.mp4'

const Video = styled.video`
    position: absolute;
    right: 0;
    top: 50%;
    width: auto; 
    height: 100vh;
    z-index: -999;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    @media (max-width: 420px){
        height: auto;
        width: 100%;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }
`

const H1 = styled.h1`
    color: white;
    position: absolute;
    font-size: 50px;
    text-align: center;
    @media(max-width: 420px){
        font-size: 30px;
    }
    top: 50%;
    width: 100%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
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
                <H1>CS17<br/>TAKIGUCHI LAB</H1>
            </ParallaxLayer>
        </div>
    )
}
export default Hero