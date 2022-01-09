import styled from "@emotion/styled"
import { css } from '@emotion/react'
import * as React from 'react'
import { ParallaxLayer } from "@react-spring/parallax"
import Sample from '../assets/1000A500.mp4'
import Typist from 'react-typist';

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

const TypingText = css`
    top: 70%;
    text-align: center;
    position: absolute;
    display:block;
    color: white;
    width: 100%;
    font-size: 2.5vw;
    font-weight: 1500;
`

const Hero = ({offset, factor = 1 }) => {
    return(
        <React.Fragment>
            <ParallaxLayer offset={offset} factor={factor}>
                <Video autoPlay loop muted playsInline>
                    <source src={Sample} type="video/mp4" />
                </Video>
            </ParallaxLayer>
            <ParallaxLayer speed={0} offset={offset} factor={factor}>
                <H1>CS17<br/>TAKIGUCHI LAB</H1>
                <Typist css={TypingText}>
                    <Typist.Delay ms={2000}/>
                    我々の研究室では、
                    <Typist.Backspace count={9} delay={800}/>
                    音声♬
                    <Typist.Backspace count={3} delay={800}/>
                    対話🗣
                    <Typist.Backspace count={4} delay={800}/>
                    コンピュータービジョン💻
                    <Typist.Backspace count={13} delay={800}/>
                    脳🧠
                    <Typist.Backspace count={3} delay={800}/>
                    など様々な分野でAIを用いた研究をしています!
                    <Typist.Backspace count={23} delay={800}/>
                    私たちと一緒に,新しくユニークな研究を始めましょう!!
                    <Typist.Delay ms={2000}/>
                </Typist>
            </ParallaxLayer>
        </React.Fragment>
    )
}
export default Hero