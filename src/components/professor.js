import styled from "@emotion/styled"
import * as React from 'react'
import { ParallaxLayer } from "@react-spring/parallax"
import Image from "../images/takigutisense.webp"


const Img = styled.img`
    width: 55%;
    position: absolute;
    top: 50%;
    right: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
`

const Div = styled.div`
    background: #eee;
    width: 45%;
    height: 40%;
    position: absolute;
    top: 50%;
    left: 10%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
`

const Professor = ({offset, factor=1}) => {
    return(
        <div>
            <ParallaxLayer speed={0.3} offset={offset} factor={factor}>      
                <Img alt="sense" src={Image} />     
            </ParallaxLayer>
            <ParallaxLayer speed={-0.1} offset={offset} factor={factor}> 
                <Div>
                    <h1>
                        Comment
                    </h1>
                </Div>
            </ParallaxLayer>
        </div>
    )
}
export default Professor